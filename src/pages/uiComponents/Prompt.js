import React, { useState, useReducer, useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';

// Initial state for action history
const initialState = {
  actions: []
};

// Action history reducer function
const actionHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_DESIGN':
      return {
        ...state,
        actions: [...state.actions, action.payload],
      };
    default:
      return state;
  }
};

const Prompt = () => {
  const { generateImage } = useContext(DesignStudioContext);
  const [view, setView] = useState('front');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Using reducer for action history state management
  const [state, dispatch] = useReducer(actionHistoryReducer, initialState);

  const handleCreate = async () => {
    // Combine the inputs into a single string
    setLoading(true);
    const designText = `${view} ${prompt} ${negativePrompt}`;
    console.log("Creating......")
    await generateImage(designText);

    // Dispatch the action to the reducer
    dispatch({ 
      type: 'CREATE_DESIGN',
      payload: {
        time: new Date(),
        action: 'CREATE_DESIGN',
        description: `Created a design with view: ${view}, prompt: ${prompt}, negative prompt: ${negativePrompt}`,
      },
    });

    setLoading(false);
  };


  return (
    <div className='p-4'>
      <label className="text-gray-700">View</label>
      <select 
        className="select w-full max-w-xs mt-1 block w-full rounded-md  border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        value={view}
        onChange={e => setView(e.target.value)}
      >
        <option value={'front'}>Front</option>
        <option value={'back'}>Back</option>
        <option value={'front + back'}>Front + Back</option>
      </select>
      <label className="block text-gray-700 mt-4">Prompt</label>
      <textarea 
        className="textarea mt-1 block w-full rounded-md  border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-20"
        placeholder="What would you like to design?"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <label className="block text-gray-700 mt-4">Negative Prompt</label>
      <textarea 
        className="textarea mt-1 block w-full rounded-md   focus:border-gray-500 focus:bg-white focus:ring-0 h-20"
        placeholder="What would you like to avoid?"
        value={negativePrompt}
        onChange={e => setNegativePrompt(e.target.value)}
      />
        <button 
      className={`mt-4 btn ${loading ? 'loading' : 'btn-outline'}`} 
      onClick={handleCreate}
      disabled={loading} // Optional: disable the button while loading
    >
      {loading ? 'Loading...' : 'Create'}
    </button>
        </div>
  );
};

export default Prompt;
