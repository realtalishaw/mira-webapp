import React, { useState } from 'react';
import { CloudArrowUpIcon, Cog6ToothIcon, PencilSquareIcon, QuestionMarkCircleIcon, ChevronDoubleLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { AutoFixHighOutlined, SpaceDashboardOutlined } from '@mui/icons-material';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import Prompt from './Prompt';
import Variations from './Variations';
import Uploads from './Uploads';
import Edit from './Edit';
import MoodboardCard from './MoodBoardCard';
import MoodBoardModal from './MoodBoardModal';


const Sidebar = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [toolTrayOpen, setToolTrayOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState('default'); // 'default', 'new', 'edit', 'delete'
  const [moodBoard, setMoodBoard] = useState(null); // This will hold the moodboard to be edited or deleted


  const toolData = {
    create: { icon: <AutoFixHighOutlined fontSize='large' />, name: 'Create' },
    variations: { icon: <InterestsOutlinedIcon fontSize='large' />, name: 'Variations' },
    uploads: { icon: <CloudArrowUpIcon className='h-8 w-8 font-bold' />, name: 'Uploads' },
    edit: { icon: <PencilSquareIcon className='h-8 w-8 font-bold' />, name: 'Edit' },
    moodboard: { icon: <SpaceDashboardOutlined fontSize='large' />, name: 'Mood Board' },
  };

  const handleToolTrayToggle = () => {
    setToolTrayOpen(false);
  };

  const handleToolSelect = (tool) => {
    setActiveTool(tool);
    setToolTrayOpen(true);
  };
  const handleNewClick = () => {
    setMoodBoard(null);
    setModalState('new');
    setModalOpen(true);
  };
  
  const handleEditClick = (moodBoard) => {
    setMoodBoard(moodBoard);
    setModalState('edit');
    setModalOpen(true);
  };
  
  const handleDeleteClick = (moodBoard) => {
    setMoodBoard(moodBoard);
    setModalState('delete');
    setModalOpen(true);
  };
  
  return (
<div className='flex' style={{ height: 'calc(100vh - 64px)' }}>
    <div className={`w-20 bg-gray-100 flex flex-col justify-between ${activeTool && 'bg-gray-100'}`}>
        <div className=' flex-grow flex flex-col justify-around'>
        <div onClick={() => handleToolSelect('create')} className={`p-4 cursor-pointer flex flex-col items-center ${activeTool === 'create' && 'bg-gray-200'}`}>
            <AutoFixHighOutlined fontSize='large' />
            <p className='text-sm '>Create</p>
          </div>
          <div onClick={() => handleToolSelect('variations')} className={`p-4 cursor-pointer flex flex-col items-center ${activeTool === 'variations' && 'bg-gray-200'}`}>
            <InterestsOutlinedIcon fontSize='large' />
            <p className='text-sm '>Variations</p>
          </div>
          <div onClick={() => handleToolSelect('uploads')} className={`p-4 cursor-pointer flex flex-col items-center ${activeTool === 'uploads' && 'bg-gray-200'}`}>
            <CloudArrowUpIcon className='h-8 w-8 font-bold' />
            <p className='text-sm '>Uploads</p>
          </div>
          <div onClick={() => handleToolSelect('edit')} className={`p-4 cursor-pointer flex flex-col items-center ${activeTool === 'edit' && 'bg-gray-200'}`}>
            <PencilSquareIcon className='h-8 w-8 font-bold' />
            <p className='text-sm '>Edit</p>
          </div>
          <div onClick={() => handleToolSelect('moodboard')} className={`p-4 cursor-pointer flex flex-col items-center ${activeTool === 'moodboard' && 'bg-gray-200'}`}>
            <SpaceDashboardOutlined fontSize='large' />
            <p className='text-sm '>Mood Board</p>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='p-4 cursor-pointer hover:bg-gray-200 flex flex-col items-center'>
            <a href="/help">
              <QuestionMarkCircleIcon className='h-8 w-8 font-bold' />
              <p className='text-sm '>Help</p>
            </a>
          </div>
          <div className='p-4 cursor-pointer hover:bg-gray-200 flex flex-col items-center'>
            <a href="/settings">
              <Cog6ToothIcon className='h-8 w-8 font-bold' />
              <p className='text-sm '>Settings</p>
            </a>
          </div>
        </div>
        </div>
        <div className={`w-80 bg-gray-200 transform transition-transform duration-500 ease-in-out z-10 ${toolTrayOpen ? 'translate-x-0 ' : '-translate-x-full hidden'}`}>
        {toolTrayOpen && 
          <>
            <div className='p-4 flex items-center gap-4'>
              {toolData[activeTool].icon}
              <h2 className="text-xl font-bold ">{toolData[activeTool].name}</h2>
            </div>
            <div className='absolute  top-1/2 right-full transform translate-x-[340px] -translate-y-1/2 cursor-pointer bg-gray-200 rounded-lg h-auto py-4' onClick={handleToolTrayToggle}>
              <ChevronLeftIcon className='h-8 w-8 text-gray-800' />
            </div>
          </>
        }
        {/* Tool tray content will go here */}
        {activeTool === 'create' && <Prompt />}
        {activeTool === 'variations' && <Variations />}
        {activeTool === 'uploads' && <Uploads />}
        {activeTool === 'edit' && <Edit />}
        {activeTool == 'moodboard' && 
         
          <div className='grid grid-rows p-4 justify-center items-center'>
             <button className='btn m-6' onClick={handleNewClick}> Create New Mood Board</button>
          <MoodboardCard
            image1='https://via.placeholder.com/150'
            image2='https://via.placeholder.com/150'
            image3='https://via.placeholder.com/150'
            moodBoardName='My Moodboard'
            onEditClick={() => handleEditClick(moodBoard)}
            onDeleteClick={() => handleDeleteClick(moodBoard)}
          />
        </div>
            }
  
      </div>
      <MoodBoardModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        moodBoard={moodBoard} 
        modalState={modalState}
      />
    </div>
  );
};

export default Sidebar;