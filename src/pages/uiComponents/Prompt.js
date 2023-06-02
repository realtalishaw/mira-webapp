import React, { useState } from 'react';
import { useContext } from 'react';
import { DesignStudioContext } from '../../DesignStudioContext';

const Prompt = () => {
  const { generateImage } = useContext(DesignStudioContext);
  const [view, setView] = useState('front');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    // Combine the inputs into a single string
    setLoading(true);
    const designText = `${view} ${prompt} ${negativePrompt}`;
    console.log("Creating......")
    await generateImage(designText);
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
