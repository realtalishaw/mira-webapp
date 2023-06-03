import React, { createContext, useState } from 'react';
import axios from 'axios';
import { API } from 'aws-amplify';

export const DesignStudioContext = createContext();

export const DesignStudioProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);

  const getFilenameFromUrl = (url) => {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/');
    const filename = pathSegments[pathSegments.length - 1];
    return filename;
  }
  
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

  return (
    <DesignStudioContext.Provider value={{ imageUrl, generateImage, selectedImage, setSelectedImage, canvasContext, setCanvasContext }}>
      {children}
    </DesignStudioContext.Provider>
  );
};
