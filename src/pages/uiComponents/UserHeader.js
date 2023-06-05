import React, { useState } from 'react';
import ShareProfileModal from './ShareProfileModal';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalCircleIcon, PencilSquareIcon, ShareIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

 


const UserHeader = ({ avatar, firstName, lastName, username, shareProfileLink }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        {avatar ?
        <div className='avatar'>
          <div className="w-24 rounded-full">
          <img className="avatar" src={avatar} alt="User Avatar" /> 
          </div>
          </div>
          : 
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{firstName.charAt(0)}</span>
            </div>
          </div>
        }
      </div>

      <div className="flex items-center mt-4">
        <h1 className="text-4xl font-bold">{firstName} {lastName}</h1>

        <Menu as="div" className="relative inline-block text-left ml-2">
          <Menu.Button>
            <EllipsisHorizontalCircleIcon className="w-8 h-8 " />
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
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="hover:bg-gray-100">
                <a href={`/settings/${username}`} className="flex items-center w-full px-4 py-2 text-left">
                  <PencilSquareIcon className="w-4 h-4 mr-2" />
                  Edit Profile
                </a>
              </Menu.Item>
              <Menu.Item className="hover:bg-gray-100">
      <button onClick={() => setShowModal(true)} className="flex items-center w-full px-4 py-2 text-left">
        <ShareIcon className="w-4 h-4 mr-2" />
        Share Profile
      </button>
    </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="mt-2 text-base text-gray-500">
      <Link to={`/@${username}`} >@{username}</Link>
      </div>
      {showModal && <ShareProfileModal shareProfileLink={shareProfileLink} closeModal={closeModal} />}
    </div>
  );
}

export default UserHeader;
