import React, { createContext, useState } from 'react';
import axios from 'axios';
import { Storage } from 'aws-amplify';
import { API } from 'aws-amplify';

export const DesignStudioContext = createContext();

export const DesignStudioProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);  // Added this line
  
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
      console.log(urls)
      while ((matches = regex.exec(result.data)) !== null) {
        urls.push(matches[1]);
      }
      // Download the images 
     
    const apiName ='downloadImage';
    const path = '/download';

      const s3Keys = await Promise.all(urls.map(async (url) => {
        console.log("Image url:", url)
      // Send the image URL to your API
      const response = await API.post(apiName, path, { body: { image_url: url } });
        console.log(response)
      // Assume your API returns a JSON object with a 'key' property
      const s3Key = response.key;

      return s3Key;
    }));

    console.log("Image keys", s3Keys)
    setImageUrl(s3Keys);
    
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
