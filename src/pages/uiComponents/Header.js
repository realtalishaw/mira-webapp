import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div>
        <h1 className="text-xl font-bold">mira.</h1>
      </div>

      <nav className="flex items-center hover:text-gray-500">
        <a href="/DesignLibrary" className="mr-4">My Collections</a>

        <button className="btn btn-outline mx-2"><a href='/sharefeed'>
          Get Inspired ✨
          </a>
        </button>

        <Menu as="div" className="relative inline-block text-left mr-4">
          <Menu.Button>
            <BellIcon className="w-7 h-7 mx-2" />
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
            <Menu.Items className="absolute right-0 h-56 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="flex items-center justify-center text-center h-full">
                <p>No Notifications to Display</p>
                </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button>
            <Bars3Icon className='w-7 h-7' />
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
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 border focus:outline-none">
  <Menu.Item>
    <a href="/help" className="block w-full px-4 py-2 text-left hover:bg-gray-100">Help</a>
  </Menu.Item>
  <Menu.Item>
    <a href="/sharefeed" className="block w-full px-4 py-2 text-left hover:bg-gray-100">Explore Collections</a>
  </Menu.Item>
  <Menu.Item>
    <a href="https://www.trymira.online/about" className="block w-full px-4 py-2 text-left hover:bg-gray-100">About Mira</a>
  </Menu.Item>
  <Menu.Item>
    <a href="/settings" className="block w-full px-4 py-2 text-left hover:bg-gray-100">Settings & Privacy</a>
  </Menu.Item>
  <Menu.Item>
      <button onClick={handleLogout} className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100">Logout</button>
    </Menu.Item>
</Menu.Items>

          </Transition>
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
