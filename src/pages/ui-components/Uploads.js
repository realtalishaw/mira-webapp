import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import ImageCard from './ImageCard'; // Ensure you have this ImageCard component created

const Uploads = () => {

    // We'll have to define the function handleUpload that takes care of the file upload logic
    const handleUpload = (event) => {
        // upload logic here
    };

    return (
        <div className="w-full p-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-300 bg-white" onClick={handleUpload}>
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
                {/* This is a placeholder. You would replace this part with a mapping function 
                that renders ImageCard for each uploaded image */}
                <div className="rounded-lg shadow-lg mr-2 w-[144px]">
                    <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg shadow-lg mr-2 w-[144px]">
                    <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg shadow-lg mr-2 w-[144px]">
                    <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg shadow-lg mr-2 w-[144px]">
                    <img src='https://via.placeholder.com/15' alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Uploads;
