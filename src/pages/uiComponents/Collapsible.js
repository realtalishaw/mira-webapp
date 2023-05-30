import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Collapsible = ({ title, children, isOpen = false }) => {
  const [isOpened, setIsOpened] = useState(isOpen);

  const toggleIsOpened = () => setIsOpened(!isOpened);

  return (
    <div className="border border-base-300 bg-base-100 rounded-box mb-2 p-4">
      <div tabIndex={0} onClick={toggleIsOpened} className="text-xl font-medium flex justify-between items-center px-4 py-2 cursor-pointer">
        {title}
        <div className='w-6 h-6'>
        {isOpened ? <ChevronUpIcon /> : <ChevronDownIcon/>}
        </div>
      </div>
      {isOpened && (
        <div className="px-4 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
