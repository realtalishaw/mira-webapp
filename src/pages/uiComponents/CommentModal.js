import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaceSmileIcon, ShareIcon, HeartIcon as Heart} from '@heroicons/react/24/outline';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Comment from './Comment';


const CommentModal = ({ isOpen, onClose, imgSrc, avatar, username, designTitle, designDescription, collectionName, comments, tags = [], shareLink = "" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  const handlePostComment = () => {
    // Function to handle posting of new comment
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if(isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />

        <div className="bg-white rounded-lg w-[988px] h-auto overflow-y-auto p-4 z-20">
          <div className="flex">
            <div className="w-[420px] pr-4">
              <img src={imgSrc} alt="" className="w-full h-[560px] object-cover rounded-md" />

              <div className="mt-2 flex flex-wrap">
                {tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-0.5 badge  text-sm font-medium  mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex justify-between">
                <button onClick={handleShareClick} className="p-2 btn btn-outline ">
                 <span>Share</span> <ShareIcon className="w-6 h-6 ml-1" />
                </button>

                <div className="flex items-center">
                <button onClick={handleLikeClick} className="btn btn-outline ">
                  {isLiked ? <HeartIcon className="w-6 h-6  text-red-500" /> : <Heart className="w-6 h-6" />}
                  <span className='pl-1'>{likesCount}</span>
                </button>
                <button onClick={onClose} className="btn btn-circle mx-2 hover:bg-gray-500">
                  <XMarkIcon className="w-6 h-6" />
                </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-base font-semibold">By <a href={`/${username}`} className="underline underline-offset-2">@{username}</a></p>
                <h2 className="text-3xl font-bold mt-2 text-center">{designTitle}</h2>
                <p className="text-gray-500 mt-1 text-center text-lg mb-2">{designDescription}</p>
                <p className="mt-2 text-right">Appears in <a href={`/collections/${collectionName}`} className="underline underline-offset-2">{collectionName}</a></p>
              </div>

              <div className="mt-4 flex-grow overflow-y-auto">
            {comments.map((comment, idx) => (
              <Comment 
                key={idx}
                avatar={comment.avatar}
                username={comment.username}
                text={comment.text}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center border-t pt-4">
            <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
            <input type="text" className="ml-2 flex-grow border rounded-md p-2" placeholder="Write a comment..." />
            <button className="p-2">
              <FaceSmileIcon className="w-8 h-8" />
            </button>
            <button onClick={handlePostComment} className="ml-2 btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Dialog>
  );
};

export default CommentModal;

