import { useState, useEffect, useContext, useRef } from 'react';
import Collapsible from './Collapsible';
import { DesignStudioContext } from '../../DesignStudioContext';
import { Storage } from '@aws-amplify/storage'; 

const Edit = () => {
  const { canvasContext, saveAction } = useContext(DesignStudioContext);
  const [drawing, setDrawing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const brushSizeRef = useRef(null);
  const [currentCollapsible, setCurrentCollapsible] = useState("Brush over the Image");

  const updateMousePosition = (ev) => {
    const { offsetX, offsetY } = ev;
    if (drawing) {
      setLastPosition(mousePosition);
    }
    setMousePosition({ x: offsetX, y: offsetY });
  };
  

  const startDraw = (ev) => {
    setDrawing(true);
    updateMousePosition(ev);
  };

  const endDraw = () => {
    setDrawing(false);
  };

  const drawLine = (ev) => {
    if (!drawing) {
      setLastPosition(null);
      return;
    }
    updateMousePosition(ev);
  
    if (lastPosition) {
      canvasContext.lineWidth = brushSizeRef.current.value;
      canvasContext.lineCap = 'round';
      canvasContext.globalCompositeOperation = 'destination-out'; // This will create the eraser effect
  
      canvasContext.beginPath();
      canvasContext.moveTo(lastPosition.x, lastPosition.y);
      canvasContext.lineTo(mousePosition.x, mousePosition.y);
      canvasContext.stroke();
  
      canvasContext.globalCompositeOperation = 'source-over'; // This will return to the default drawing mode
    }
};

  
  

  const handleBrushSizeChange = (event) => {
    if (canvasContext) {
      canvasContext.lineWidth = event.target.value;
    }
  };

  const handleReset = () => {
    if (canvasContext) {
      canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    }
  };
  const handleGenerate = () => {
    saveAction('EDIT', {tool:"edit", input:"input urls and prompt", output:"imageKeys"})
  };

  const handleContinue = () => {
    setCurrentCollapsible("Describe your edit");
  };

  const handleEdit = async () => {
    if (!canvasContext) return;
  
    // Convert the edited canvas (mask) to a blob and save
    canvasContext.canvas.toBlob(async (blob) => {
      try {
        const maskResult = await Storage.put('mask.png', blob, {
          contentType: 'image/png'
        });
        console.log('Mask:', maskResult); // Logs the key of the masked uploaded file
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    }, 'image/png');
  
    setCurrentCollapsible("Select a result");
    saveAction('EDIT', {tool:"edit", input:"input urls and prompt", output:"imageKeys"})
  };
  
  useEffect(() => {
    if (canvasContext) {
      canvasContext.canvas.addEventListener('mousedown', startDraw);
      canvasContext.canvas.addEventListener('mousemove', drawLine);
      canvasContext.canvas.addEventListener('mouseup', endDraw);
    }
    return () => {
      if (canvasContext) {
        canvasContext.canvas.removeEventListener('mousedown', startDraw);
        canvasContext.canvas.removeEventListener('mousemove', drawLine);
        canvasContext.canvas.removeEventListener('mouseup', endDraw);
      }
    };
  }, [canvasContext, drawing, mousePosition, lastPosition]);

  return (
    <div className='p-4 '>
        <Collapsible title="Brush over the Image" isOpen={currentCollapsible === "Brush over the Image"}>
        <p>Erase the area(s) you want to change</p>
        {/* Canvas implementation for brush functionality goes here */}
        <div className="mt-2">
      <input ref={brushSizeRef} type="range" min="1" max="30" defaultValue="5" onChange={handleBrushSizeChange} className="slider slider-horizontal w-full"/>
    </div>
        <button className="btn btn-outline mt-2 mx-2" onClick={handleReset}>Reset</button>
        <button className="btn  mt-2 mx-2" onClick={handleContinue}>Continue</button>
      </Collapsible>
  
      <Collapsible title="Describe your edit" isOpen={currentCollapsible === "Describe your edit"}>
        <div className="flex flex-col">
          <textarea placeholder="What do you want to edit in your design?" className="textarea h-24 textarea-bordered"></textarea>
          <button className="btn  mt-2" onClick={handleEdit}>Edit</button>
        </div>
      </Collapsible>
  
      <Collapsible title="Select a result" isOpen={currentCollapsible === "Select a result"}>
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