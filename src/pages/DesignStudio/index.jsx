import React from 'react';
import DesignStudioHeader from '../uiComponents/DesignStudioHeader';
import Sidebar from '../uiComponents/Sidebar';
import ImageHolder from '../uiComponents/ImageHolder';

// Dummy images
const images = [
  'https://via.placeholder.com/350',
  'https://via.placeholder.com/450',
  'https://via.placeholder.com/550',
  'https://via.placeholder.com/650',
  'https://via.placeholder.com/750',
];

const DesignStudio= () => {
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
