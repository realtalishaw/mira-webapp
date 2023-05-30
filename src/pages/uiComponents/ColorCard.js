import React from 'react';

const ColorCard = ({ hexCode }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden" style={{width: '144px', height: '144px'}}>
      <div className="w-full h-2/3" style={{backgroundColor: `#${hexCode}`}} />
      <div className="w-full h-1/3 bg-white flex items-center justify-center">
        <span className="text-sm">Hex #{hexCode}</span>
      </div>
    </div>
  );
};

export default ColorCard;
