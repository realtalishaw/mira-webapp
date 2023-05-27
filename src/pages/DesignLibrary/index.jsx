import React, { useState } from 'react';
import Header from '../ui-components/Header'
import UserHeader from '../ui-components/UserHeader'
import EmptyState from '../ui-components/EmptyState';
import NewCollectionModal from '../ui-components/NewCollectionModal';
import CollectionCard from '../ui-components/CollectionCard';

const DesignLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewCollectionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
      <Header />
      <UserHeader 
        avatar="https://media.licdn.com/dms/image/C4D03AQHjsNK81swyCw/profile-displayphoto-shrink_800_800/0/1646697243923?e=2147483647&v=beta&t=7GAPczh0_-Cmt71hqDiaaiqGktw27XMK_8V_xj6c8S8"
        firstName="Talisha"
        lastName="White"
        username="realtalishaw"
        shareProfileLink="/share-profile"
      />
   
       <div class="flex flex-row justify-center m-6">
       <EmptyState onNewCollectionClick={handleNewCollectionClick} title='New Collection' />
      <NewCollectionModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={true}
        url="/collection"
      />
       </div>
      
    </div>
  );
}

export default DesignLibrary;
