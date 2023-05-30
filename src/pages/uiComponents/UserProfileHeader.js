import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalCircleIcon, PencilSquareIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const UserProfileHeader = ({ avatar, firstName, lastName, username, shareProfileLink, followers, following, likes, twitterLink, facebookLink, instagramLink, bio, url, isFollowing: isFollowingProp
}) => {
    const [isFollowing, setIsFollowing] = useState(isFollowingProp);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };


    return (
        <div className="flex flex-col items-center text-center ">
            <div className="avatar mt-4">
                <div className="w-44 h-44 overflow-hidden rounded-full">
                    <img src={avatar} alt="User Avatar" />
                </div>
            </div>

            <div className="flex items-center mt-4 justify-center">
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
                                <a href="/settings" className="flex items-center w-full px-4 py-2 text-left">
                                    <PencilSquareIcon className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </a>
                            </Menu.Item>
                            <Menu.Item className="hover:bg-gray-100">
                                <a href={shareProfileLink} className="flex items-center w-full px-4 py-2 text-left">
                                    <ShareIcon className="w-4 h-4 mr-2" />
                                    Share Profile
                                </a>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            <div className="mt-2 text-base text-gray-500">
                @{username}
            </div>

            <div className="mt-4 flex w-1/4 h-12 pb-2">
                <div className="flex-1">
                    <div className="font-extrabold">{following}</div>
                    <div>Following</div>
                </div>
                <div className="border-l border-r pl-6 pr-6">
                    <div className="font-extrabold">{followers}</div>
                    <div>Followers</div>
                </div>
                <div className="flex-1">
                    <div className="font-extrabold">{likes}</div>
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
                <a href={twitterLink}><FontAwesomeIcon icon={faTwitter} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-blue-300" /></a>
                <a href={facebookLink}><FontAwesomeIcon icon={faFacebook} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-blue-400" /></a>
                <a href={instagramLink}><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 border border-black p-3 mx-2 rounded-lg hover:text-purple-600" /></a>
            </div>

            <div className="mt-4 w-[30%]">
                {bio}
            </div>

            <div className="mt-4 flex justify-center w-3/4">
                <a href={url} className="flex items-center hover:text-lg ">
                    <LinkIcon className="w-6 h-6 mr-2" />
                    {url}
                </a>
            </div>
           
        </div>
    );
}

export default UserProfileHeader;
