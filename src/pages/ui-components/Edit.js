import { useState } from 'react';
import Collapsible from './Collapsible';

const Edit = () => {
  //const [selectedImage, setSelectedImage] = useState(null);

  const handleBrushSizeChange = (event) => {
    // Handle brush size change
  };

  const handleReset = () => {
    // Handle reset
  };

  const handleEdit = () => {
    // Handle edit
  };

  const handleGenerate = () => {
    // Handle generate new results
  };

  return (
    <div className='p-4 '>
      <Collapsible title="Brush over the Image" isOpen={true}>
        <p>Hightlight the area(s) you want to change</p>
        {/* Canvas implementation for brush functionality goes here */}
        <div className="mt-2">
          <input type="range" onChange={handleBrushSizeChange} className="slider slider-horizontal w-full"/>
        </div>
        <button className="btn btn-outline mt-2 mx-2" onClick={handleReset}>Reset</button>
        <button className="btn  mt-2 mx-2" onClick={handleReset}>Continue</button>
      </Collapsible>
  
      <Collapsible title="Describe your edit">
        <div className="flex flex-col">
          <textarea placeholder="What do you want to edit in your design?" className="textarea h-24 textarea-bordered"></textarea>
          <button className="btn  mt-2" onClick={handleEdit}>Edit</button>
        </div>
      </Collapsible>
  
      <Collapsible title="Select a result">
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* This is a placeholder. You would replace this part with a mapping function 
          that renders ImageCard for each uploaded image */}
          <div className="rounded-lg shadow-lg mr-2 w-[100px]">
            <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover hover:border hover:border-gray-600 hover:shadow-xl" />
          </div>
          <div className="rounded-lg shadow-lg mr-2 w-[100px]">
            <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover hover:border hover:border-gray-600 hover:shadow-xl" />
          </div>
          <div className="rounded-lg shadow-lg mr-2 w-[100px]">
            <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover hover:border hover:border-gray-600 hover:shadow-xl" />
          </div>
          <div className="rounded-lg shadow-lg mr-2 w-[100px]">
            <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover hover:border hover:border-gray-600 hover:shadow-xl" />
          </div>
          
        </div>
        <button className="btn mt-2" onClick={handleGenerate}>Generate new results</button>
      </Collapsible>
  
      <div className="flex justify-end mt-4 ">
        <button className="btn btn-outline mx-2">Cancel</button>
        <button className="btn  mx-2">Done</button>
      </div>
    </div>
  );
  
};

export default Edit;
