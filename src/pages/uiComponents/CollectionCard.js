import React, { useState } from 'react';
import { PencilSquareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import EditDeleteCollectionModal from './EditDeleteCollectionModal';

const CollectionCard = ({ image1, image2, image3, collectionName, isUserCollection, url, collection_id }) => {
  const [isHearted, setHearted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleHeartClick = () => {
    setHearted(!isHearted);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
  
    <div className="w-auto ">
        <a href={url}>
      <div className="h-72 w-72 rounded-lg border overflow-hidden shadow-lg mx-6">
        <div className="grid grid-cols-2 grid-rows-2 h-72">
          <div className="col-span-1 row-span-2">
            <img src={image1} alt="image1" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1 ">
            <img src={image2} alt="image2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={image3} alt="image3" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      </a>
      <div className="flex justify-between items-center px-7 pt-2">
        <h2 className="font-bold">{collectionName}</h2>
        {isUserCollection ? 
          <button onClick={handleModalOpen}><PencilSquareIcon className="w-7 h-7" /></button>
          :
          isHearted ?
            <HeartIconSolid 
              onClick={handleHeartClick} 
              className="w-7 h-7 text-red-500" 
            />
          :
            <HeartIcon 
              onClick={handleHeartClick} 
              className="w-7 h-7" 
            />
        }
      </div>

      <EditDeleteCollectionModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        collectionName={collectionName}
        collection_id={collection_id}
      />
    </div>
   
  );
}

export default CollectionCard;
