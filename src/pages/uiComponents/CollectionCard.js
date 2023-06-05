import React, { useState, useContext } from 'react';
import { PencilSquareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import EditDeleteCollectionModal from './EditDeleteCollectionModal';
import UserContext from '../../UserContext'
import { DataStore } from '@aws-amplify/datastore';
import { Like } from '../../models';

const CollectionCard = ({ designs, collectionName, isUserCollection, url, collection_id }) => {
  const image1 = designs[0]?.designImage || "/images/placeholderImage.png";
  const image2 = designs[1]?.designImage || "/images/placeholderImage.png";
  const image3 = designs[2]?.designImage || "/images/placeholderImage.png";
  const [isHearted, setHearted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useContext(UserContext);

  const handleHeartClick = async() => {
    setHearted(!isHearted);

    if (!isHearted) { // if the collection is not liked yet, we add the like to the database
      const newLike = new Like({
        userID: user.id, // current user's id
        collectionID: collection_id // id of the collection that was liked
      });

      try {
        await DataStore.save(newLike);
        console.log('New like added successfully!');
      } catch (error) {
        console.error('Error adding new like: ', error);
      }
    } else { // if the collection is already liked, we remove the like from the database
      const likesToRemove = await DataStore.query(Like, l => l.userID('eq', user.id).collectionID('eq', collection_id));
      if (likesToRemove.length > 0) {
        try {
          await DataStore.delete(likesToRemove[0]); // remove the first matching like
          console.log('Like removed successfully!');
        } catch (error) {
          console.error('Error removing like: ', error);
        }
      }
    }
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
            <img src={image1} alt="image1" className="w-full h-full object-cover rounded-lg  py-1 pl-1" />
          </div>
          <div className="col-span-1 row-span-1 ">
            <img src={image2} alt="image2" className="w-full h-full object-cover rounded-lg px-1 pt-1" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src={image3} alt="image3" className="w-full h-full object-cover rounded-lg p-1" />
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
