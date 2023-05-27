import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const MoodboardCard = ({ image1, image2, image3, moodBoardName, onEditClick, onDeleteClick }) => {

  return (
    <div className="h-72 w-72 rounded-lg border overflow-hidden shadow-lg mx-6 relative">
      <div className="grid grid-cols-2 grid-rows-2 h-full">
        <div className="col-span-1 row-span-2">
          <img src={image1} alt="image1" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={image2} alt="image2" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={image3} alt="image3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* This is the overlay for the name and icons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-60 p-2 flex justify-between items-center">
        <h2 className="font-bold">{moodBoardName}</h2>
        <div className="flex">
        <PencilSquareIcon onClick={(e) => onEditClick(e)} className="w-6 h-6 mx-2 hover:text-gray-300" />
<TrashIcon onClick={(e) => onDeleteClick(e)} className="w-6 h-6 mx-2 hover:text-red-400" />

        </div>
      </div>
    </div>
  );
}

export default MoodboardCard;
