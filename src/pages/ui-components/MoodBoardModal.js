import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import MoodboardCard from './MoodBoardCard';
import EmptyState from './EmptyState';
import { XMarkIcon, CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import ImageCard from './ImageCard';
import FileUpload from './FileUpload';
import ColorPicker from './ColorPicker'; 

const MoodboardModal = ({ isOpen, onClose, moodBoard, modalState: initialModalState }) => {
  const [modalState, setModalState] = useState(initialModalState);
  const [moodBoardName, setMoodBoardName] = useState(moodBoard?.name || '');
  const [prevModalState, setPrevModalState] = useState(null); // to store the previous state
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setModalState(initialModalState);
    setMoodBoardName(moodBoard?.name || '');
  }, [initialModalState, moodBoard]);
  
  const handleNewClick = () => {
    setModalState('new');
    setMoodBoardName('');
  };

  const handleEditClick = (e) => {
    e.stopPropagation();  // Add this line
    setModalState('edit');
    setMoodBoardName(moodBoard?.name || '');
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();  // Add this line
    setModalState('delete');
  };


  const handleCancelClick = () => {
    setModalState('default');
  };

  const handleNameChange = (e) => {
    if (e.target.value.length <= 50) {
      setMoodBoardName(e.target.value);
    }
  };

  const handleSaveClick = () => {
    // Implement the save functionality here
    setModalState('default');
  };

  const handleAddNewClick = (category) => {
    if (category === 'Colors') {
      setModalState('color-picker');
    } else {
      setPrevModalState(modalState); // store the current state before transitioning to 'upload'
      setSelectedCategory(category);
      setModalState('upload');
    }
  };

  const handleFileUpload = () => {
    // Implement the file upload here
    setModalState('default');
  };

  const handleCancelUploadClick = () => {
    setSelectedCategory(null);
    setModalState(prevModalState || 'default');
  };

  const handleDelete = () => {
    // Implement the delete functionality here
    setModalState('default');
  };


  return (
    <Modal open={isOpen} onClose={onClose} className="flex items-center justify-center overflow-y-auto py-12">
      <div className="bg-white p-6 rounded-lg w-11/12 max-h-full overflow-y-auto relative">
        <h1 className='text-3xl text-center p-6'>My Mood Boards</h1>
        <button onClick={onClose} className="absolute right-4 top-4">
          <XMarkIcon className="w-6 h-6" />
        </button>
        {modalState === 'default' && (
          <div className='grid grid-cols-4 gap-6 justify-center items-center'>
            <EmptyState onNewCollectionClick={handleNewClick} title='New Moodboard' />
            <MoodboardCard
              image1='https://via.placeholder.com/150'
              image2='https://via.placeholder.com/150'
              image3='https://via.placeholder.com/150'
              moodBoardName='My Moodboard'
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          </div>
        )}
        {modalState === 'upload' && (
          <FileUpload
            category={selectedCategory}
            onUpload={handleFileUpload}
            onCancel={handleCancelUploadClick}
          />
        )}
     {modalState === 'color-picker' && (
  <ColorPicker setModalState={setModalState} />
)}

        {(modalState === 'edit' || modalState === 'new') && (
          <>
            <div className='input-group px-24'>
              <input
                type='text'
                value={moodBoardName}
                onChange={handleNameChange}
                className='border rounded-lg p-2 flex-grow'
                placeholder='Enter Mood Board Name'
              />
              <button className='btn btn-square btn-outline border-gray-200 bg-gray-200'>
                <CheckIcon className="w-6 h-6 text-green-500" />
              </button>
            </div>
            <p className={`text-sm text-right px-24 ${moodBoardName.length > 50 ? 'text-red-500' : ''}`}>{moodBoardName.length}/50</p>
      
            <div className='mt-6 mx-8'>
  {['Colors', 'Textures', 'Patterns', 'Inspiration'].map(category => (
    <div key={category}>
      <h2 className='font-bold px-4'>{category}</h2>
      <div className='flex mt-2 mb-6 px-4 gap-2'>
        <EmptyState 
          title={category} 
          onNewCollectionClick={() => handleAddNewClick(category)} 
        />
        <div className='flex overflow-x-auto' style={{maxWidth: 'calc(288px * 4'}}> 
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
          <ImageCard imageUrl='https://via.placeholder.com/150' onDelete={handleDeleteClick} />
        </div>
      </div>
    </div>
  ))}
</div>




            <div className='mt-4 text-right'>
              <button onClick={handleSaveClick} className='px-4 py-2 btn btn-wide'>
                Save
              </button>
            </div>
          </>
        )}
        {modalState === 'delete' && (
          <div className="p-6 text-center">
            <ExclamationCircleIcon className="w-14 h-14 mx-auto mb-4 text-red-400" />
            <p>The collection '{moodBoardName}' will be deleted. You cannot undo this.</p>
            <button onClick={handleCancelClick} className="py-2 px-4 mx-4 btn btn-outline">Cancel</button>
            <button onClick={handleDelete} className="py-2 px-4 btn border-red-500 text-white bg-red-500 mt-4">Delete</button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default MoodboardModal;
