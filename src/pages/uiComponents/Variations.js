import React, { useState, useContext } from 'react';
import VariationColorPicker from './VariationColorPicker';
import PatternSelect from './PatternSelect';
import { DesignStudioContext } from '../../DesignStudioContext';

const Variations = () => {
  const { generateImage, saveAction } = useContext(DesignStudioContext);
  const [colors, setColors] = useState(['#000000']);
  const [prompt, setPrompt] = useState('');
  const [pattern, setPattern] = useState('none');

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  const resetFields = () => {
    setColors(['#000000']);
    setPrompt('');
    setPattern('none');
  };

  const addNewColor = () => {
    if (colors.length < 4) {
      setColors([...colors, '#000000']);
    }
  };
  

  const updateColor = (index, color) => {
    setColors(colors.map((c, i) => (i === index ? color : c)));
  };
  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const generateVariation = () => {
    const colorsString = colors.join(', ');
    const patternName = pattern ? pattern.name : 'none';
    const variationString = `Prompt: ${prompt}, Colors: ${colorsString}, Pattern: ${patternName}`;
   const imageKeys = generateImage(variationString);
    saveAction('VARIATIONS', { tool: 'Variations', input: variationString, output: imageKeys })
  };
  
  
  const patterns = [
    {
      name: "Polka Dots",
      image: "https://static.vecteezy.com/system/resources/previews/004/264/020/original/free-hand-drawn-colorful-polka-dot-seamless-background-pattern-free-vector.jpg"
    },
    {
      name: "Stripes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4ztrpl6SO8JPSEL3wD-zwKOir7Zj6RMwvQ&usqp=CAU"
    },
    {
      name: "Chevron",
      image: "https://cdn.shoplightspeed.com/shops/640826/files/34144886/1652x1652x1/tvd-rainbow-chevron.jpg"
    },
    {
      name: "Herringbone",
      image: "https://www.thespruce.com/thmb/WYs-NGqk3ReDXQfMYCS9fvRR2J4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1299219549-ec030b3e8d9a4e6f96ed80c1460d1f31.jpg"
    },
  ];

  return (
    <div className="w-full box-border max-w-full p-4">
      <label htmlFor="variationPrompt" className="block font-medium text-gray-700 mx-2">Variation Prompt</label>
      <textarea
        id="variationPrompt"
        name="variationPrompt"
        className="textarea mt-1 w-full h-20 block"
        placeholder="Describe the variations you want to create. E.g. Show me in these colors"
        value={prompt}
        onChange={handlePromptChange}
      />
<div className="mt-4">
        <label htmlFor="colorPicker" className="block font-medium text-gray-700 ">Color</label>
        <div className="grid grid-cols-2  gap-2 ">
  {colors.map((color, i) => (
    <VariationColorPicker 
    key={i} 
    color={color} 
    updateColor={(color) => updateColor(i, color)} 
    addNewColor={addNewColor} 
    removeColor={() => removeColor(i)}
  />
  

  ))}
</div>

      </div>
<div className="mt-4">
  <label htmlFor="patternPicker" className="block  font-medium text-gray-700  ">Pattern</label>
  <PatternSelect patterns={patterns} selectedPattern={pattern} setSelectedPattern={setPattern} />
</div>
      <button className="btn btn-outline mt-2" onClick={resetFields}>Reset</button>
      <button className="btn mt-2 mx-2" onClick={generateVariation}>Generate Variation</button>
    </div>
  );
};

export default Variations;
