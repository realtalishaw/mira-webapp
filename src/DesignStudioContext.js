import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API, DataStore } from 'aws-amplify';
import { Session, Action, Design } from './models'


export const DesignStudioContext = createContext();

export const DesignStudioProvider = ({ children, designId }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [actionHistory, setActionHistory] = useState([]);

  useEffect(() => {
    const fetchSession = async () => {
      const sessions = await DataStore.query(Session, c => c.designID.eq(designId));
    
      let session;
      if (sessions.length > 0) {
        console.log("active session found")
        session = sessions[0];
      } else {
        console.log("new session created")
        session = await DataStore.save(
          new Session({
            designID: designId,
            // any other fields to initialize a session
          })
        );
      }
    
      // Save the session ID in state
      setSessionId(session.id);
    
      // If there is a session
      if (session) {
        // Fetch the Design associated with this session
        const designs = await DataStore.query(Design, d => d.id.eq(session.designID));
    
        if (designs.length > 0) {
          const design = designs[0];
          // If there's a designImage, set it to selectedImage state
          if (design.designImage) {
            setSelectedImage(design.designImage);
          }
        }
    
        // Now, fetch all actions associated with this session
        const actions = await DataStore.query(Action, a => a.sessionID.eq(session.id));
        console.log("User Actions", actions)
        // If there are any actions
        if (actions.length > 0) {
          // Sort actions by createdAt field in descending order
          actions.sort((a, b) => b.createdAt - a.createdAt);
    
          const latestAction = actions[0];
          // If the latest action has imgKey, set it to imageUrl state
          if (latestAction.imgKey && latestAction.imgKey.length > 0) {
            setImageUrl(latestAction.imgKey);
          }
        }
      }
    };
    
  
    fetchSession();
  }, [designId]); // The hook will run every time the designId prop changes
  
  
  

  const getFilenameFromUrl = (url) => {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/');
    const filename = pathSegments[pathSegments.length - 1];
    return filename;
  }
  
  const saveAction = async (actionType, payload) => {
    const newAction = { actionType, ...payload, sessionID: sessionId };
  
    // Save locally
    setActionHistory(prevActions => [...prevActions, newAction]);
  
    // Save to the backend
    try {
      const actionRecord = new Action(newAction);
      const result = await DataStore.save(actionRecord);
      console.log('Action saved to backend successfully', result);
    } catch (error) {
      console.error('Failed to save action to backend:', error);
    }
  };
  

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
      return filenames
    } catch (err) {
      console.error(err);
    }
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
        saveAction 
      }}
    >
      {children}
    </DesignStudioContext.Provider>
  );
};