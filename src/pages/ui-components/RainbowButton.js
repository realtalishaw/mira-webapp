import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline'; // Import the close icon

const RainbowButton = ({ hexCode, onClick, onRemove }) => {
  const rainbowBackground = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)';
  
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden" style={{width: '144px', height: '144px'}} onClick={onClick}>
      {hexCode && (
        <div 
          className="absolute top-0 right-0 m-1 w-5 h-5 bg-white rounded-full cursor-pointer" 
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          <XCircleIcon className="h-5 w-5 text-red-500" />
        </div>
      )}
      <div className="w-full h-2/3" style={{background: hexCode ? `#${hexCode}` : rainbowBackground}} />
      <div className="w-full h-1/3 bg-white flex items-center justify-center">
        <span className="text-sm">{hexCode ? `Hex #${hexCode}` : 'Select Color'}</span>
      </div>
    </div>
  );
};

export default RainbowButton;
