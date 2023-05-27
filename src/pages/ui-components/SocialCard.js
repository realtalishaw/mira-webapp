import React, { useState } from 'react';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid';
import CommentModal from './CommentModal';

const SocialCard = ({ avatar, username, image, shareLink }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comments = [
    { avatar: 'https://i.pravatar.cc/300?img=1', username: 'JohnDoe', text: 'Great picture!' },
    { avatar: 'https://i.pravatar.cc/300?img=2', username: 'JaneSmith', text: 'Awesome shot!' },
    // Add as many comments as you'd like
  ];


  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleShareClick = () => {
    // Copy the share link to the clipboard
    navigator.clipboard.writeText(shareLink).then(() => {
      setIsLinkCopied(true);

      // Reset the link copied status after a few seconds
      setTimeout(() => setIsLinkCopied(false), 2000);
    });
  };

  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-white w-80 rounded-md shadow-md overflow-hidden">
      {/* User Info */}
      <div className="flex items-center p-2">
        <img src={avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
        <div className="ml-4 text-xl">@{username}</div>
      </div>

      {/* Image */}
      <div className="w-full">
        <img src={image} alt="" className="object-cover w-full h-80" />
      </div>

      {/* Buttons */}
      <div className="flex justify-start p-4 space-x-2">
        <button onClick={handleLikeClick}>
          {isLiked ? <FilledHeartIcon className="w-6 h-6 text-red-500" /> : <HeartIcon className="w-6 h-6" />}
        </button>
        <button onClick={handleCommentClick}>
          <ChatBubbleOvalLeftIcon className="w-6 h-6" />
        </button>
        <button onClick={handleShareClick}>
          <ShareIcon className="w-6 h-6" />
          {isLinkCopied && <span className="absolute text-base text-gray-600 alert shadow-lg w-auto p-2"><CheckCircleIcon /> Link Copied!</span>}
        </button>
      </div>
      <CommentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imgSrc={image}
        avatar={avatar}
        username={username}
        designTitle="Skylar Heart Tank – Brandy Melville Europe"
        designDescription="Regular fit, eyelet heart tank top with a lace scoop neck a white bow. Fabrics: 100% cotton Measurements: 18  bust Made in: Italy"
        collectionName="SS 23"
        comments={comments}
        tags={["high waisted jeans", "denim jacket", "platform sandals", "sunglasses", "summer"]}
        shareLink="https://sharelink.example.com"
      />


    </div>
  );
};

export default SocialCard;