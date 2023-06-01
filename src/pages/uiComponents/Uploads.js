import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import ImageCard from './ImageCard'; 
import { useDropzone } from 'react-dropzone';
import { Storage } from 'aws-amplify';
import { useState } from 'react';

const Uploads = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);

    const onDrop = (acceptedFiles) => {
        console.log("Files dropped:", acceptedFiles);
        if (acceptedFiles[0].size > 1000000) {
            // compress file
        } else {
            setSelectedFile(acceptedFiles[0]);
            handleUpload(acceptedFiles[0]);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleUpload = async (file) => {
        console.log("Uploading file:", file); // Add this
        console.log("attempting to upload....")
        try {
            const result = await Storage.put(file.name, file);
            const url = await Storage.get(file.name); // gets the signed url
            console.log(url)
            setImages(prevImages => [...prevImages, url]); 
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
        <div className="w-full p-4">
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-300 bg-white">
                <input {...getInputProps()} />
                <CloudArrowUpIcon className="h-10 w-10 text-gray-500" />
                <p className="mt-2">Drag and Drop or click to upload</p>
            </div>
            <div className="mt-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Prompt</label>
                <textarea
                    id="prompt"
                    name="prompt"
                    className="mt-1 p-2 w-full h-20 rounded-md border border-gray-300"
                    placeholder="What do you want to design?"
                />
                                <button className="btn btn-outline mt-2">Create</button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <ImageCard key={index} src={image} />
                ))}
            </div>
        </div>
    );
};

export default Uploads;

