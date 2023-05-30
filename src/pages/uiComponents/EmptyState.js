import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const EmptyState = ({ onNewCollectionClick, title = 'New Collection' }) => {
  return (
    <button onClick={onNewCollectionClick} className="flex items-center justify-center h-72 w-72 px-6 py-4 text-gray-700 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-500">
      <PlusCircleIcon className="w-5 h-5 mr-2" />
      {title}
    </button>
  );
}

export default EmptyState;
