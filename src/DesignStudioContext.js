import React, { createContext, useState, useReducer } from 'react';
import axios from 'axios';
import { API } from 'aws-amplify';

export const DesignStudioContext = createContext();

const getFilenameFromUrl = (url) => {
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname.split('/');
  const filename = pathSegments[pathSegments.length - 1];
  return filename;
}

function actionHistoryReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
    case 'VARIATIONS':
    case 'UPLOAD':
    case 'EDIT':
    case 'MOODBOARD':
      return [...state, action];
    case 'UNDO':
      if (state.length === 0) return state;
      return state.slice(0, -1);  // Remove the last action
    case 'REDO':
      // TODO: Implement your redo logic here. You might need additional state to keep track of undone actions.
    default:
      return state;
  }
}

export const DesignStudioProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [actionHistory, dispatch] = useReducer(actionHistoryReducer, []);

  const generateImage = async (text) => {
    try {
      const payload = {
        text: text,
        num: "4",
        size: "1024x1024"
      };

      const result = await axios.post('https://mirawebapp.herokuapp.com/api/generate-image', payload);
      
      const regex = /\"url\": \"(.*?)\"/g;
      let matches;
      let urls = [];
      while ((matches = regex.exec(result.data)) !== null) {
        urls.push(matches[1]);
      }
      console.log("URLS", urls)
      const apiName ='downloadImage';
      const path = '/download';

      const s3Keys = await Promise.all(urls.map(async (url) => {
        try {
          const response = await API.post(apiName, path, { body: { image_url: url } });
          console.log("Response", response)
          const s3Key = response.key;
          return s3Key;
        } catch (apiError) {
          console.error('Error in API post', apiError);
          return apiError
        }
      }));

      // Get filenames from the urls
      const filenames = urls.map(getFilenameFromUrl);
      
      setImageUrl(filenames);
    
    } catch (err) {
      console.error(err);
    }
  };

  const saveAction = (actionType, payload) => {
    dispatch({ type: actionType, payload });
  };

  const undo = () => {
    dispatch({ type: 'UNDO' });
  };

  const redo = () => {
    dispatch({ type: 'REDO' });
  };

  return (
    <DesignStudioContext.Provider 
      value={{ 
        imageUrl, 
        generateImage, 
        selectedImage, 
        setSelectedImage, 
        canvasContext, 
        setCanvasContext, 
        actionHistory, 
        saveAction, 
        undo, 
        redo 
      }}>
      {children}
    </DesignStudioContext.Provider>
  );
};
