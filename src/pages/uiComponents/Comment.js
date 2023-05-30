import React, { useState } from 'react';
import { FaceSmileIcon, ShareIcon, HeartIcon as Heart } from '@heroicons/react/24/outline';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';

// Comment component
const Comment = ({ avatar, username, text }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if(isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <div className="flex justify-between items-start mt-4">
      <div className="flex items-start">
        <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
        <div className="ml-2">
          <p className="text-sm font-semibold">{username}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>
      <button onClick={handleLikeClick} className="btn btn-ghost hover:bg-white ">
        {isLiked ? <HeartIcon className="w-6 h-6  text-red-500" /> : <Heart className="w-6 h-6" />}
        <span className='pl-1'>{likesCount}</span>
      </button>
    </div>
  );
};

export default Comment;