import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';

const ImageHolder = ({ images }) => {
  const { selectedImage, setSelectedImage } = useContext(DesignStudioContext); // Fetch selectedImage here
  const [isTrayOpen, setIsTrayOpen] = useState(true);

  if (!images?.length) {
    return null; // Or return a loading spinner
  }
 
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const toggleTray = () => {
    setIsTrayOpen(!isTrayOpen);
  };

  return (
    <div className="flex flex-col items-center h-[calc(100vh-90px)] justify-center">
      {/* Selected Image */}
      <div
        className="bg-center bg-cover w-1/2 h-[95%] m-2 relative"
        style={{ backgroundImage: `url(${selectedImage})` }}
      ></div>

      {/* Tray Toggle Button */}
      <button
        onClick={toggleTray}
        className="right-0 mb-2 mr-2 bg-white p-1 rounded-full shadow-lg border border-gray-100"
      >
        {isTrayOpen ? <ChevronDownIcon className="w-8 h-8" /> : <ChevronUpIcon className='w-8 h-8' />}
      </button>

      {/* Image Tray */}
      <div
        className={`w-3/4 rounded-t-md bg-white shadow-lg border border-gray-100 p-4 flex justify-between items-center transition-all duration-500 ease-in-out transform ${isTrayOpen ? 'translate-y-0' : ' hidden'}`}
      >
        {images.slice(0, 4).map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt=""
            className={`h-24 rounded w-auto cursor-pointer ${image === selectedImage ? 'ring ring-gray-500' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}

      </div>
    </div>
  );
};

export default ImageHolder;
