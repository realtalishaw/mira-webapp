import React, { useState } from 'react';
import { ChevronLeftIcon, BookmarkIcon, HeartIcon, ArrowDownIcon, LinkIcon, ShareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate } from 'react-router-dom';



const DesignStudioHeader = ({ collectionName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const handleShareClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <div className="flex items-center">
      <button onClick={handleBackClick} className="text-xl">
          <ChevronLeftIcon className='h-8 w-8 text-gray-900'/> 
        </button>
        <span className="ml-4 text-lg">{collectionName}</span>
        <HistoryOutlinedIcon className="text-gray-500 ml-6 hover:text-black" /><span className="text-sm text-gray-400">undo</span>
      </div>
      <div className="relative">
      <button 
  onClick={handleShareClick}
  className="py-2 px-4 btn btn-outline gap-2">
    {dropdownOpen ? <XMarkIcon className="h-6 w-6" /> : <ShareIcon className="h-6 w-6" />}
    {dropdownOpen ? 'Close' : 'Share'}
</button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <ArrowDownIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Download</span>
            </button>
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <HeartIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Share on Social</span>
            </button>
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <BookmarkIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Save</span>
            </button>
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <LinkIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Copy link to design</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignStudioHeader;
