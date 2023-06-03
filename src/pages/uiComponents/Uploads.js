import React, { useState, useEffect, useContext, useRef } from 'react';
import { Storage } from 'aws-amplify';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { Image } from '@aws-amplify/ui-react';
import UserContext from '../../UserContext';
import { User } from '../../models';
import { DataStore } from '@aws-amplify/datastore';

const Uploads = () => {
    const [fileURLs, setFileURLs] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [promptText, setPromptText] = useState("");
    const { user } = useContext(UserContext);
    const promptRef = useRef();

    useEffect(() => {
        const fetchUserFiles = async () => {
            if (user && user.uploads) {
                const userFileURLs = await Promise.all(user.uploads.map(async (upload) => {
                    const url = await Storage.get(upload);
                    console.log(url)
                    return url;
                }));
                setFileURLs(userFileURLs);
            }
        };
    
        fetchUserFiles();
    }, [user]);



    const processFile = async ({ file }) => {

        const fileExtension = file.name.split('.').pop();

        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await window.crypto.subtle.digest('SHA-1', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
        const newFileName = `${hashHex}.${fileExtension}`;

        return { file, key: newFileName };
    };
    const handleUploadSuccess = async (response) => {
        const url = await Storage.get(response.key);
        setFileURLs((prevURLs) => [...prevURLs, url]);

        // Get the user from DataStore
        const dataStoreUser = await DataStore.query(User, user.id);
        if (dataStoreUser) {
            // Add new upload to user uploads
            const newUploads = dataStoreUser.uploads ? [...dataStoreUser.uploads, response.key] : [response.key];

            // Update user in DataStore
            await DataStore.save(
                User.copyOf(dataStoreUser, updated => {
                    updated.uploads = newUploads;
                })
            );
        }
    };

    const handleImageClick = (url) => {
        setSelectedImage(url);
    }

    const handlePromptChange = (event) => {
        setPromptText(event.target.value);
    }

    const handleCreateClick = () => {
        // API call here with selectedImage and promptText
    }

    return (
        <>
            <div className="p-2">
                <StorageManager
                    acceptedFileTypes={['image/*']}
                    accessLevel="public"
                    maxFileCount={1}
                    isResumable
                    processFile={processFile}
                    onUploadSuccess={handleUploadSuccess}
                />
                <div className="mt-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Prompt</label>
                <textarea
                    id="prompt"
                    name="prompt"
                    className="mt-1 p-2 w-full h-20 rounded-md border border-gray-300"
                    placeholder="What do you want to design?"
                    onChange={handlePromptChange}
                    ref={promptRef}
                />
                <button className="btn btn-outline mt-2" onClick={handleCreateClick}>Create</button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 overflow-auto max-h-screen">
                {fileURLs.map((url, index) => 
                    <div 
                        key={index} 
                        onClick={() => handleImageClick(url)} 
                        className={url === selectedImage ? "border border-2 border-gray-500 " : ""}
                    >
                        <Image src={url}></Image>
                    </div>
                )}
                </div>
            </div>
        </>
    );
};

export default Uploads;