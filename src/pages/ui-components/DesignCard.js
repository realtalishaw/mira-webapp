import React, { useState } from 'react';
import { PencilSquareIcon, TrashIcon, HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid';

const DesignCard = ({ design, isOwner }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="border border-gray-200 shadow-md p-4 rounded-lg w-72 h-72">
      <img src={design.image} alt={design.name} className="mb-2 rounded w-full h-3/4 object-cover" />
      <h3 className="font-semibold mb-2">{design.name}</h3>

      {isOwner ? (
        <div className="flex justify-end">
          <button onClick={toggleModal} className="mx-1">
            <PencilSquareIcon className="w-6 h-6" />
          </button>
          <button onClick={toggleModal} className="mx-1">
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="flex justify-end">
          <button onClick={toggleModal} className="mx-1">
            <ChatBubbleOvalLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={handleLike} className="mx-1">
            {isLiked ? <HeartIconFilled className="w-6 h-6 text-red-500" /> : <HeartIcon className="w-6 h-6" />}
          </button>
        </div>
      )}

   
    </div>
  );
};

export default DesignCard;
