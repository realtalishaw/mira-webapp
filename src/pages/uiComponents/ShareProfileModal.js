import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ShareProfileModal = ({shareProfileLink, closeModal}) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    setIsCopied(true);
  };

  // Add the base URL to the shareProfileLink
  const completeLink = `https://www.app.trymira.online${shareProfileLink}`;

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-1/2">
        <div className="px-10 py-5">
          <h2 className="text-2xl font-semibold">Share this link via</h2>
          <div className="flex justify-center mt-6 space-x-4">
            <a href={`mailto:?subject=Check out my profile on Mira&body=Check out my profile on Mira: ${completeLink}`} className="px-6 py-3 hover:bg-gray-600 hover:border-none text-white btn">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${completeLink}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 hover:bg-blue-600 hover:border-none text-white btn">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={`https://twitter.com/intent/tweet?text=Check out my profile on Mira&url=${completeLink}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 hover:bg-blue-400 hover:border-none text-white btn">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Or Copy link</h2>
            <div className="relative">
              <input type="text" value={completeLink} readOnly className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"/>
              <CopyToClipboard text={completeLink} onCopy={handleCopy}>
                <button className="absolute right-0 top-0 mt-2 mr-2">{isCopied ? "Copied!" : "Copy"}</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-4 pb-4">
          <button onClick={closeModal} className="px-4 py-2 btn">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ShareProfileModal;
