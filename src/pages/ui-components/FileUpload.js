import React, { useState } from 'react';
import { CloudArrowUpIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FileUpload = ({ category, onUpload, onCancel }) => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null); // 'success', 'error', or null

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    // Handle the upload logic here
    // On successful upload:
    // setUploadStatus('success');
    // On failed upload:
    // setUploadStatus('error');
  };

  return (
    <>
      <h2 className='font-bold px-4 text-3xl'>Add New {category}</h2>
      <div className='border-dashed border-2 border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center h-72  hover:bg-gray-200 '>
        <CloudArrowUpIcon className="w-24 h-24 text-gray-400" />
        <p className='text-gray-400 ml-2'>Drag and Drop or click to upload</p>
        <input type='file' onChange={handleFileChange} className='hidden' />
      </div>
      {uploadStatus === 'success' && (
        <p className='text-green-500 mt-2 flex items-center'>
          <CheckIcon className="w-6 h-6 text-green-500" />
          File Uploaded Successfully
        </p>
      )}
      {uploadStatus === 'error' && (
        <p className='text-red-500 mt-2 flex items-center'>
          <XMarkIcon className="w-6 h-6 text-red-500" />
          Error Uploading File
        </p>
      )}
      <div className='mt-4 text-right'>
        <button onClick={onCancel} className='px-4 py-2 btn btn-wide btn-outline'>
          Cancel
        </button>
        <button onClick={handleUploadClick} className='px-4 py-2 btn btn-wide ml-2'>
          Upload
        </button>
      </div>
    </>
  );
};

export default FileUpload;
