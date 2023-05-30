import React, { useState } from 'react';

const Prompt = () => {
  const [view, setView] = useState('front');
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');

  const handleCreate = () => {
    // handle create click here
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
      <button className='mt-4 btn btn-outline ' onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default Prompt;
