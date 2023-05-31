import React, { createContext, useState } from 'react';
import axios from 'axios';

export const DesignStudioContext = createContext();

export const DesignStudioProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async (text) => {
    try {
      const result = await axios.post('https://mirawebapp.herokuapp.com/api/generate-image', { text });
      setImageUrl(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DesignStudioContext.Provider value={{ imageUrl, generateImage }}>
      {children}
    </DesignStudioContext.Provider>
  );
};
