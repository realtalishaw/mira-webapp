import React, { useState, useEffect } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { DataStore } from '@aws-amplify/datastore';
import { Design} from '../../models';


const EditDeleteDesign = ({ isOpen, onClose, DesignName, design_id, mode }) => {
  const [newDesignName, setNewDesignName] = useState(DesignName);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    if (mode === 'delete') {
      setIsDeleteMode(true);
    } else {
      setIsDeleteMode(false);
    }
  }, [mode]);

  const handleDeleteClick = () => {
    setIsDeleteMode(true);
  };

  const handleSave = async () => {
    try {
      // Fetch the original design
      const originalDesign = await DataStore.query(Design, design_id);
  
      // Make a copy with the new name and save it
      const updated = await DataStore.save(
        Design.copyOf(originalDesign, updated => {
          updated.designName = newDesignName;
        })
      );
   
      onClose();
    } catch (error) {
      console.error("An error occurred while saving the design:", error);
    }
  };
  
  const handleDelete = async () => {
    try {
      // Log the collection_id
      console.log("Deleting design with id:", design_id);
  
      // Fetch the original collection
      const originalDesign = await DataStore.query(Design, design_id);
  
      // Log the result of the query
      console.log("Query result:", originalDesign);
  
      // Delete it
      await DataStore.delete(originalDesign);
  
      onClose();
    } catch (error) {
      console.error("An error occurred while deleting the design:", error);
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
          <h2 className="text-lg font-bold">Edit or Delete Design</h2>
          <button onClick={onClose}><XMarkIcon className="w-6 h-6" /></button>
        </div>

        {!isDeleteMode ? (
          <div className="p-6">
            <div className="mb-4">
              <label>Rename your Design</label>
              <input
                type="text"
                value={newDesignName}
                onChange={(e) => setNewDesignName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <p className="text-right">{newDesignName.length}/50</p>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={handleDeleteClick} className="flex items-center text-red-500">
                <TrashIcon className="w-5 h-5 mr-1" />
                Delete Design
              </button>
              <button onClick={handleSave} className="py-2 px-4 btn btn-outline">Save</button>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <TrashIcon className="w-10 h-10 mx-auto mb-4" />
            <p>The design '{DesignName}' will be deleted. You cannot undo this.</p>
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

export default EditDeleteDesign;
