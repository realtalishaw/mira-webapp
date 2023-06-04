import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon, BookmarkIcon, HeartIcon, ArrowDownIcon, LinkIcon, ShareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate } from 'react-router-dom';
import { DataStore } from '@aws-amplify/datastore';
import { Design } from '../../models';
import { DesignStudioContext } from '../../DesignStudioContext';


const DesignStudioHeader = ({ collectionName }) => {
  const { selectedImage, undo } = useContext(DesignStudioContext);
  const { design_id } = useParams();
  const [designName, setDesignName] = useState('');
  const [designDescription, setDesignDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const design = await DataStore.query(Design, design_id);
        setDesignName(design.designName);
      } catch (error) {
        console.error("An error occurred while fetching the design:", error);
      }
    };
  
    fetchDesign();
  }, [design_id]);

  const handleUndoClick = () => {  // New handler for undo
    console.log("undo");
    undo();
  };


  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  const handleShareClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSaveClick = () => {
    setModalOpen(true);
    setDropdownOpen(false);
  };

  const handleTagChange = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter(item => item !== tag));
  }

  const saveDesign = async(event) => {
    const image = selectedImage;
    console.log(image)
    try {
      // Fetch the original design
      const originalDesign = await DataStore.query(Design, design_id);
      console.log(typeof selectedImage)
  
      // Make a copy with the new name and save it
      const updated = await DataStore.save(
        Design.copyOf(originalDesign, updated => {
          updated.designName = designName;
          updated.designDescription = designDescription;
          updated.tags = tags;
          updated.designImage = image;
        })
      );
        console.log("Updated Design:", updated)
      setModalOpen(false);
    } catch (error) {
      console.error("An error occurred while saving the design:", error);
    }
    
  }

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <div className="flex items-center">
        <button onClick={handleBackClick} className="text-xl">
          <ChevronLeftIcon className='h-8 w-8 text-gray-900'/> 
        </button>
        <span className="ml-4 text-lg">{collectionName}</span>
       {/* updated onClick handler for the undo button */}
       <button onClick={handleUndoClick}>
          <HistoryOutlinedIcon className="text-gray-500 ml-6 hover:text-black" />
          <span className="text-sm text-gray-400">undo</span>
        </button>
      </div>
      <div className="relative">
        <input
          className="mr-4 py-2 px-4 rounded border border-gray-400"
          type="text"
          value={designName}
          onChange={(e) => setDesignName(e.target.value)}
        />
        <button 
          onClick={handleShareClick}
          className="py-2 px-4 btn btn-outline gap-2">
          {dropdownOpen ? <XMarkIcon className="h-6 w-6" /> : <ShareIcon className="h-6 w-6" />}
          {dropdownOpen ? 'Close' : 'Share'}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
                        <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <ArrowDownIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Download</span>
            </button>
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <HeartIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Share on Social</span>
            </button>
            <button 
              onClick={handleSaveClick}
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <BookmarkIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Save</span>
            </button>
            <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-300 w-full">
              <LinkIcon className="h-5 w-5 text-gray-900"/>
              <span className="ml-2">Copy link to design</span>
            </button>
          </div>
        )}
        {modalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Save Design
                    </h3>
                    <div className="mt-2">
                      <input
                        className="w-full py-2 px-4 rounded border border-gray-400"
                        type="text"
                        placeholder="Design Name"
                        required
                        value={designName}
                        onChange={(e) => setDesignName(e.target.value)}
                      />
                      <textarea
                        className="w-full mt-2 py-2 px-4 rounded border border-gray-400"
                        placeholder="Design Description (optional)"
                        value={designDescription}
                        onChange={(e) => setDesignDescription(e.target.value)}
                      />
                      <input
                        className="w-full mt-2 py-2 px-4 rounded border border-gray-400"
                        type="text"
                        placeholder="Tags (press enter to add)"
                        onKeyDown={handleTagChange}
                      />
                      {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-2 text-sm font-semibold text-gray-700 mr-2 ">
                          {tag}
                          <button onClick={() => removeTag(tag)} className="ml-1 text-gray-500 hover:text-gray-800">×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                <button onClick={saveDesign} type="button" className="btn inline-flex justify-center w-full  px-4 py-2  text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignStudioHeader;


