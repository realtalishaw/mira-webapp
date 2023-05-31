import React, { createContext, useState } from 'react';
import axios from 'axios';

export const DesignStudioContext = createContext();

export const DesignStudioProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
  
      console.log(urls);
      setImageUrl(urls);
    } catch (err) {
      console.error(err);
    }
  };
  
  
  return (
    <DesignStudioContext.Provider value={{ imageUrl, generateImage, selectedImage, setSelectedImage }}>
      {children}
    </DesignStudioContext.Provider>
  );
};
