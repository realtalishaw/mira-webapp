import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ImageCard = ({ imageUrl, onDelete }) => {
  return (
    <div className="relative w-72 h-72  flex-shrink-0 rounded-lg shadow-lg mr-2">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      <button onClick={onDelete} className="absolute top-2 right-2">
        <XMarkIcon className="w-6 h-6 text-red-500" />
      </button>
    </div>
  );
};

export default ImageCard;
