import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import ColorCard from './ColorCard';
import RainbowButton from './RainbowButton';

const predefinedPalettes = [
  { name: "Palette 1", colors: ["#FF5733", "#FFBD33", "#75FF33", "#33FF57", "#3375FF"] },
  // Add more palettes...
];

const ColorPicker = ({ setModalState }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
    if(!displayColorPicker) setCurrentColor(null); // Reset current color when opening the color picker
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setCurrentColor(color.hex.slice(1)); // Only update currentColor when choosing color
  };

  const handleColorRemove = (index) => {
    setSelectedColors(selectedColors.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    if (currentColor) {
      setSelectedColors([...selectedColors, currentColor]);
      setCurrentColor(null);
      handleClose();
    }
  };
  const handleCancel = () => {
    handleClose();
    if (selectedColors.length > 0) {
      setModalState('edit');
    } else {
      setModalState('new');
    }
  };

  return (
    <div>
    <h1 className="font-bold p-4 text-3xl">Add New Colors</h1>
    <div className='flex gap-2 p-4'>
      {selectedColors.map((color, i) => (
        <RainbowButton 
        key={i} 
        hexCode={color} 
        onClick={handleClick} 
        onRemove={() => handleColorRemove(i)} 
      />
      ))}
      <RainbowButton hexCode={currentColor} onClick={handleClick} /> {/* Current color displayed here */}
      <div className='w-36 h-36 border-2 border-dashed border-gray-400 flex items-center justify-center'>
          <button onClick={() => { /* add palette to moodboard */ }}>Add Color Palette to Moodboard</button>
      </div>
    </div>

      {displayColorPicker && (
        <div>
          <div onClick={handleClose} />
          <SketchPicker color={`#${currentColor || 'fff'}`} onChange={handleChange} />
          <button onClick={handleConfirm} >Confirm</button> {/* Confirm button */}
        </div>
      )}
      <div className="divider"></div> 
      {predefinedPalettes.map((palette, index) => (
        <div key={index}>
          <h2 className="font-bold text-xl px-4">{palette.name}</h2>
          <div className='flex gap-2 p-4'>
            {palette.colors.map((color, i) => (
              <ColorCard key={i} hexCode={color.slice(1)} />
            ))}
            <div className='w-36 h-36 border-2 border-dashed border-gray-400 flex items-center justify-center'>
              <button onClick={() => { /* add palette to moodboard */ }}>Add Color Palette to Moodboard</button>
            </div>
          </div>
        </div>
        
      ))}
      <div className='text-right'>
      <button className="btn btn-outline p-4 text-right" onClick={handleCancel}>Cancel</button> {/* Cancel button */}
      </div>
    </div>
  );
};

export default ColorPicker;