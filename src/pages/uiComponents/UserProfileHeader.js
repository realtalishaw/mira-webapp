import React, { useState, useEffect, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalCircleIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import UserContext from '../../UserContext'
import ShareProfileModal from './ShareProfileModal';
import { DataStore } from '@aws-amplify/datastore';
import { Like, Followers, Following } from '../../models';



const UserProfileHeader = ({isFollowing: isFollowingProp}) => {
    const { user } = useContext(UserContext);
    const [isFollowing, setIsFollowing] = useState(isFollowingProp);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    

    useEffect(() => {
        // Function to load count of likes
        const loadLikesCount = async () => {
            const likes = await DataStore.query(Like, l => l.userID.eq(user.id));
            setLikesCount(likes.length);
        };

        // Function to load count of followers
        const loadFollowersCount = async () => {
            const followers = await DataStore.query(Followers, f => f.userID.eq(user.id));
            setFollowersCount(followers.length);
        };

        // Function to load count of following
        const loadFollowingCount = async () => {
            const following = await DataStore.query(Following, f => f.userID.eq(user.id));
            setFollowingCount(following.length);
        };

        loadLikesCount();
        loadFollowersCount();
        loadFollowingCount();
    }, []);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };

    const toggleShare = () => {
        setIsShareOpen(prev => !prev);
      };

    return (
        <div className="flex flex-col items-center text-center ">
           {user.avatar ?
        <div className='avatar p-4'>
          <div className="w-44  rounded-full">
          <img className="avatar" src={user.avatar} alt="User Avatar" /> 
          </div>
          </div>
          : 
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{user.firstName.charAt(0)}</span>
            </div>
          </div>
        }

            <div className="flex items-center mt-4 justify-center">
                <h1 className="text-4xl font-bold">{user.firstName} {user.lastName}</h1>
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
                            <button onClick={toggleShare} className="flex items-center w-full px-4 py-2 text-left">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share Profile
                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            <div className="mt-2 text-base text-gray-500">
                @{user.username}
            </div>

            <div className="mt-4 flex w-1/4 h-12 pb-2">
            <div className="flex-1">
            <div className="font-extrabold">{followingCount}</div>
            <div>Following</div>
        </div>
        <div className="border-l border-r pl-6 pr-6">
            <div className="font-extrabold">{followersCount}</div>
            <div>Followers</div>
        </div>
        <div className="flex-1">
            <div className="font-extrabold">{likesCount}</div>
            <div>Likes</div>
        </div>
            </div>
            <div className="mt-4 flex justify-center w-1/4">
                <button
                    onClick={handleFollowClick}
                    className={`px-2 mx-2 py-1 btn ${isFollowing ? 'btn' : 'btn-outline'}`}
                >
                    {isFollowing ? 'Following' : 'Follow'}
                </button>
                <a href={user.twitterLink}><FontAwesomeIcon icon={faTwitter} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-blue-300" /></a>
                <a href={user.facebookLink}><FontAwesomeIcon icon={faFacebook} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-blue-400" /></a>
                <a href={user.instagramLink}><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-purple-600" /></a>
            </div>

            <div className="mt-4 w-[30%]">
                {user.bio}
            </div>

            <div className="mt-4 flex justify-center w-3/4">
            <a href={user.website} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-lg ">
    <LinkIcon className="w-6 h-6 mr-2" />
    {user.website}
</a>

            </div>
    {/* Share Modal */}
    {isShareOpen && (
     <ShareProfileModal 
     isOpen={isShareOpen} 
     closeModal={toggleShare}
     shareProfileLink={`/@${user.username}`}
   />
      )}
        </div>
    );
}

export default UserProfileHeader;
