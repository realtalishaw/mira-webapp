import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import RainbowButton from './RainbowButton';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const VariationColorPicker = ({ color, updateColor, addNewColor, removeColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState(color);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
    setCurrentColor(color);
  };

  const handleChange = (color) => {
    setCurrentColor(color.hex);
    updateColor(color.hex);
  };

  const handleConfirm = () => {
    setDisplayColorPicker(false);
    addNewColor();
  };



  return (
    <div>
  <RainbowButton 
  hexCode={currentColor.substring(1)} 
  onClick={handleClick}
  onRemove={removeColor}
/>

      {displayColorPicker && (
        <div style={{position: 'relative', width: '220px'}}>
          <div className="w-auto bg-pink-100">
            <SketchPicker color={currentColor} onChange={handleChange} />
            <CheckCircleIcon className="h-12 w-12 text-green-600 absolute top-0 right-0 bg-white rounded-full " onClick={handleConfirm} /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default VariationColorPicker;
