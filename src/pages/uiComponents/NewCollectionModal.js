import React, { useState } from 'react';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { DataStore } from 'aws-amplify';
import { Collection } from '../../models'
import { useNavigate } from 'react-router-dom';


const NewCollectionModal = ({ isOpen, onClose, user }) => {
    const [collectionName, setCollectionName] = useState("");
    const [collectionInfo, setCollectionInfo] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);




    const handleSubmit = async (event) => {
        console.log("create collection button clicked")
        event.preventDefault();

        try {
            const collectionInput = {
                collectionName,
                userID: user.id,
            };
            const result = await DataStore.save(new Collection(collectionInput));
            navigate(`/collection/${result.id}`);

            onClose();
        } catch (error) {
            console.error("Error creating new collection: ", error);
            setErrorMessage(error.message);
        }
    };



    const collectionNameExceeded = collectionName.length > 50;
    const collectionInfoExceeded = collectionInfo.length > 400;

    return isOpen ? (
        <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="w-1/3 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between p-6">
                        <h2 className="text-lg font-bold">Create new Collection</h2>
                        <button onClick={onClose}><XMarkIcon className="w-6 h-6" /></button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Collection Name"
                                value={collectionName}
                                onChange={(e) => setCollectionName(e.target.value)}
                                className={`w-full p-2 border rounded-md ${collectionNameExceeded ? 'border-red-500' : ''}`}
                                required
                            />
                            <p className={`text-right ${collectionNameExceeded ? 'text-red-500' : ''}`}>{collectionName.length}/50</p>
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Add more info (optional)"
                                value={collectionInfo}
                                onChange={(e) => setCollectionInfo(e.target.value)}
                                className={`w-full p-2 border rounded-md ${collectionInfoExceeded ? 'border-red-500' : ''}`}
                            />
                            <p className={`text-right ${collectionInfoExceeded ? 'text-red-500' : ''}`}>{collectionInfo.length}/400</p>
                        </div>
                        <div className="mb-4 text-center">
                            <div className="btn-group ">
                                <button
                                    type="button"
                                    className={`btn ${isPublic ? '' : 'btn-outline'}`}
                                    onClick={() => setIsPublic(true)}
                                >
                                    <EyeIcon className="w-6 h-6" />
                                    Public
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${!isPublic ? '' : 'btn-outline'}`}
                                    onClick={() => setIsPublic(false)}
                                >
                                    <EyeSlashIcon className="w-6 h-6" />
                                    Private
                                </button>

                            </div>
                            <p className="mt-2 text-gray-400">{isPublic ? 'Anyone can view without needing an account' : 'Only people you share the secret link with can view'}</p>
                        </div>

                        <div className="text-right">
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    <button type="submit" className="py-2 px-4 btn btn-outline">Create</button>
</div>

                    </form>
                </div>
            </div>
        </>
    ) : null;
};

export default NewCollectionModal;
