import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';
import { Storage } from '@aws-amplify/storage';


const ImageHolder = ({ imageKeys }) => {
  const { selectedImage, setSelectedImage, setCanvasContext } = useContext(DesignStudioContext);
  const [isTrayOpen, setIsTrayOpen] = useState(true);
  const canvasRef = useRef(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (imageKeys) {
        console.log('Image Keys:', imageKeys)
        let urls = await Promise.all(imageKeys.map(key => Storage.get(key, {
          level: ''
        })));
        console.log('Fetched URLs:', urls); // Log the URLs
        setImageUrls(urls);
      }
    }

    // Call the function and handle possible errors
    fetchImages().catch(err => console.error('Error fetching images:', err));
  }, [imageKeys]);




  useEffect(() => {
    if (selectedImage) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      setCanvasContext(context);
      let img = new Image();
      img.onload = function () {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      img.crossOrigin = "anonymous";  // Set crossOrigin before setting src
      img.src = selectedImage;
    }
  }, [selectedImage]);

  if (!imageUrls?.length) {
    return null; // Or return a loading spinner
  }

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const toggleTray = () => {
    setIsTrayOpen(!isTrayOpen);
  };

  return (
    <div className="flex flex-col items-center h-[calc(100vh-90px)] justify-center">
      {/* Selected Image */}
      <div style={{ width: '50%', height: '95%', position: 'relative' }} className="m-2">
        <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0"></canvas>
      </div>

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
        {imageUrls.slice(0, 4).map((url, idx) => (
          <div
            key={idx}
            className={`h-24 rounded w-auto cursor-pointer ${url === selectedImage ? 'ring ring-gray-500' : ''}`}
            onClick={() => handleImageClick(url)}
          >
            <img src={url} alt={idx} className='max-h-24 w-auto' />

          </div>
        ))}

      </div>
    </div>
  );
};

export default ImageHolder;
