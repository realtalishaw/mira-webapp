import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalCircleIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, PencilSquareIcon, ShareIcon } from '@heroicons/react/24/outline';
import SpaceDashboardOutlined from '@mui/icons-material/SpaceDashboardOutlined';
import MoodboardModal from './MoodBoardModal';
import UserContext from '../../UserContext'
import EditDeleteCollectionModal from './EditDeleteCollectionModal';
import ShareProfileModal from './ShareProfileModal';
import { useParams } from 'react-router-dom';


const CollectionHeader = ({ collectionName, username, avatarUrl }) => {
  const { user } = useContext(UserContext);
  const [isMoodBoardOpen, setIsMoodBoardOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isEditDeleteModalOpen, setIsEditDeleteModalOpen] = useState(false);
  const { collection_id } = useParams();


  const [privacyStatus, setPrivacyStatus] = useState({ text: 'Public', icon: <EyeIcon className="w-6 h-6" /> });

  const handlePrivacyChange = (newPrivacyStatus) => {
    setPrivacyStatus(newPrivacyStatus);
  };

  const toggleMoodBoard = () => {
    setIsMoodBoardOpen(prev => !prev);
  };

  const toggleShare = () => {
    setIsShareOpen(prev => !prev);
  };

  const toggleEditDeleteModal = () => {
    setIsEditDeleteModalOpen(prev => !prev);
  };



  return (
    <div className="text-center m-12">
      <div className="flex justify-center items-center">
        <h2 className="font-bold text-4xl mb-2">{collectionName}</h2>
        <Menu as="div" className="relative inline-block text-left ml-2">
          <Menu.Button>
            <EllipsisHorizontalCircleIcon className="w-8 h-8" />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-40 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="hover:bg-gray-100">
              <button onClick={toggleEditDeleteModal} className="flex items-center w-full px-4 py-2 text-left">
        <PencilSquareIcon className="w-4 h-4 mr-2" />
        Edit Collection
      </button>
              </Menu.Item>
              <Menu.Item className="hover:bg-gray-100">
                <button onClick={toggleShare} className="flex items-center w-full px-4 py-2 text-left">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share Collection
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="flex justify-center items-center mt-2">
        <div className="avatar">
        {avatarUrl ?
        <div className='avatar'>
          <div className="w-12 rounded-full">
          <img className="avatar" src={avatarUrl} alt="User Avatar" /> 
          </div>
          </div>
          : 
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{user.firstName.charAt(0)}</span>
            </div>
          </div>
        }
        </div>
        <p className="ml-2">
          By <Link to={`/@${username}`} className="underline">@{username}</Link>
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
   <div>
   <button onClick={toggleShare} className="flex items-center mx-2 btn btn-outline">
      <ShareIcon className="w-6 h-6" />
    </button>
    <span className='m-2'>Share</span>
    </div>


   <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center mx-4 btn btn-outline">
        {privacyStatus.icon}
      </Menu.Button>
      <span className="my-4 mx-5">{privacyStatus.text}</span>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <button onClick={() => handlePrivacyChange({ text: 'Public', icon: <EyeIcon className="w-6 h-6" /> })} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
              <EyeIcon className="w-4 h-4 mr-2" />
              Public: Anyone can view the collection
            </button>
          </Menu.Item>
          <Menu.Item>
            <button onClick={() => handlePrivacyChange({ text: 'Private', icon: <EyeSlashIcon className="w-6 h-6" /> })} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
              <EyeSlashIcon className="w-4 h-4 mr-2" />
              Private: Only people with the link can view
            </button>
          </Menu.Item>
          <Menu.Item>
            <button onClick={() => handlePrivacyChange({ text: 'Hidden', icon: <LockClosedIcon className="w-6 h-6" /> })} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
              <LockClosedIcon className="w-4 h-4 mr-2" />
              Hidden: No one but you can view
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>



   <div>
   <button onClick={toggleMoodBoard} className="flex items-center mx-4 btn btn-outline">
      <SpaceDashboardOutlined className="w-6 h-6" />
    </button>
    <span className="m-2">Moodboard</span>
   </div>
  </div>

{/* Mood Board Modal */}
{isMoodBoardOpen && (
  <MoodboardModal 
    isOpen={isMoodBoardOpen} 
    onClose={toggleMoodBoard}
    modalState="default"
  />
)}
  {isEditDeleteModalOpen && (
      <EditDeleteCollectionModal 
        isOpen={isEditDeleteModalOpen} 
        onClose={toggleEditDeleteModal} 
        collectionName={collectionName}
        collection_id={collection_id}

      />
    )}

      {/* Share Modal */}
      {isShareOpen && (
     <ShareProfileModal 
     isOpen={isShareOpen} 
     closeModal={toggleShare}
     shareProfileLink={`/collection/${collection_id}`}
   />
      )}
    </div>
  );
};

export default CollectionHeader;

       
