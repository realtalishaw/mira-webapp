import React from 'react';
import DesignStudioHeader from '../uiComponents/DesignStudioHeader';
import Sidebar from '../uiComponents/Sidebar';
import ImageHolder from '../uiComponents/ImageHolder';
import { useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';
import {  useParams } from 'react-router-dom';




const DesignStudio = () => {
  const { imageUrl } = useContext(DesignStudioContext);
  const images = imageUrl || [];
  const { collection_name } = useParams();

  return (
    <div className="h-screen">
      <DesignStudioHeader collectionName={collection_name} />

      <div className="flex">
        <Sidebar />

        {/* Right-side workspace */}
        <div className="w-full" >
          <ImageHolder images={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
