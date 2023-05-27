import React, { useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';

const EditDeleteCollectionModal = ({ isOpen, onClose, collectionName }) => {
  const [newCollectionName, setNewCollectionName] = useState(collectionName);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteMode(true);
  };

  const handleSave = () => {
    // Handle the save action
    onClose();
  };

  const handleDelete = () => {
    // Handle the delete action
    onClose();
  };

  const handleCancel = () => {
    setIsDeleteMode(false);
  };

  return isOpen ? (
    <>
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={onClose}></div>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-1/3 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-lg font-bold">Edit or Delete Collection</h2>
          <button onClick={onClose}><XMarkIcon className="w-6 h-6" /></button>
        </div>

        {!isDeleteMode ? (
          <div className="p-6">
            <div className="mb-4">
              <label>Rename your Collection</label>
              <input
                type="text"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-right">{newCollectionName.length}/50</p>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={handleDeleteClick} className="flex items-center text-red-500">
                <TrashIcon className="w-5 h-5 mr-1" />
                Delete Collection
              </button>
              <button onClick={handleSave} className="py-2 px-4 btn btn-outline">Save</button>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <TrashIcon className="w-10 h-10 mx-auto mb-4" />
            <p>The collection '{collectionName}' will be deleted. You cannot undo this.</p>
            <button onClick={handleDelete} className="py-2 px-4 rounded text-white bg-red-500 mt-4">Delete</button>
          </div>
        )}

        {isDeleteMode && (
          <div className="p-6 text-right">
            <button onClick={handleCancel} className="py-2 px-4 btn btn-outline">Cancel</button>
          </div>
        )}
      </div>
    </div>
    </>
    ) : null;    
};

export default EditDeleteCollectionModal;
