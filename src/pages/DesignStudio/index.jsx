import React from 'react';
import DesignStudioHeader from '../uiComponents/DesignStudioHeader';
import Sidebar from '../uiComponents/Sidebar';
import ImageHolder from '../uiComponents/ImageHolder';
import { useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';




const DesignStudio= () => {
  const { imageUrl } = useContext(DesignStudioContext);
  const images = [
    imageUrl
  ];

  return (
    <div className="h-screen">
      <DesignStudioHeader collectionName='Spring Summer 2023' />

      <div className="flex">
        <Sidebar />

        {/* Right-side workspace */}
        <div className="w-full" >
          <ImageHolder images={images} />
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
