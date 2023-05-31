import React, { useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { DataStore } from '@aws-amplify/datastore';
import { Collection } from '../../models';


const EditDeleteCollectionModal = ({ isOpen, onClose, collectionName, collection_id }) => {
  const [newCollectionName, setNewCollectionName] = useState(collectionName);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteMode(true);
  };

  const handleSave = async () => {
    console.log("Collection Saved!!")
    try {
      // Fetch the original collection
      const originalCollection = await DataStore.query(Collection, collection_id);
  
      // Make a copy with the new name and save it
      await DataStore.save(
        Collection.copyOf(originalCollection, updated => {
          updated.collectionName = newCollectionName;
        })
      );
    
      onClose();
    } catch (error) {
      console.error("An error occurred while saving the collection:", error);
    }
  };
  
  
  const handleDelete = async () => {
    try {
      // Log the collection_id
      console.log("Deleting collection with id:", collection_id);
  
      // Fetch the original collection
      const originalCollection = await DataStore.query(Collection, collection_id);
  
      // Log the result of the query
      console.log("Query result:", originalCollection);
  
      // Delete it
      await DataStore.delete(originalCollection);
  
      onClose();
    } catch (error) {
      console.error("An error occurred while deleting the collection:", error);
    }
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
