import { useState, useEffect, useContext, useRef } from 'react';
import Collapsible from './Collapsible';
import { DesignStudioContext } from '../../DesignStudioContext';
import { Storage } from '@aws-amplify/storage'; 

const Edit = () => {
  const { canvasContext } = useContext(DesignStudioContext);
  const [drawing, setDrawing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const brushSizeRef = useRef(null);
  const [currentCollapsible, setCurrentCollapsible] = useState("Brush over the Image");

  const updateMousePosition = (ev) => {
    const { offsetX, offsetY } = ev;
    setLastPosition(mousePosition);
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
    if (!drawing) return;
    updateMousePosition(ev);

    canvasContext.lineWidth = brushSizeRef.current.value;
    canvasContext.lineCap = 'round';
    canvasContext.strokeStyle = 'rgba(255, 0, 0)';
    canvasContext.globalAlpha = 0.3;


    canvasContext.beginPath();
    canvasContext.moveTo(lastPosition.x, lastPosition.y);
    canvasContext.lineTo(mousePosition.x, mousePosition.y);
    canvasContext.stroke();
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

const handleContinue = () => {

    setCurrentCollapsible("Describe your edit");
  };

  const handleEdit = async () => {
    if (!canvasContext) return;
    // create a blank image with the same dimensions as the canvas
    let imgData = canvasContext.createImageData(canvasContext.canvas.width, canvasContext.canvas.height);
    // loop over every pixel in the canvas
    for(let i=0; i<imgData.data.length; i+=4) {
      // if the pixel is not painted over, set the alpha to 0 (making it transparent)
      if(canvasContext.getImageData(i/4%canvasContext.canvas.width, Math.floor(i/4/canvasContext.canvas.width), 1, 1).data[3] === 0) {
        imgData.data[i+3] = 0;
      }
    }
    // put the new image data back onto the canvas
    canvasContext.putImageData(imgData, 0, 0);
    // convert the canvas to a blob
    canvasContext.canvas.toBlob(async (blob) => {
      // use Amplify Storage to save the blob to S3
      try {
        const result = await Storage.put('mask.png', blob, {
          contentType: 'image/png'
        });
        console.log(result); // This logs the key of the uploaded file
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    }, 'image/png');
    setCurrentCollapsible("Select a result");
  };


  const handleGenerate = () => {
    // Handle generate new results
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
        <p>Hightlight the area(s) you want to change</p>
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
