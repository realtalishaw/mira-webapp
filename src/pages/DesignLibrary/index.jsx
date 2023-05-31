import React, { useState, useContext, useEffect} from 'react';
import UserContext from '../../UserContext'
import Header from '../uiComponents/Header'
import UserHeader from '../uiComponents/UserHeader'
import EmptyState from '../uiComponents/EmptyState';
import NewCollectionModal from '../uiComponents/NewCollectionModal';
import CollectionCard from '../uiComponents/CollectionCard';
import { DataStore } from 'aws-amplify';
import { Collection } from '../../models';

const DesignLibrary = () => {
  const { user } = useContext(UserContext); // Access user context
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const result = await DataStore.query(Collection, c => c.userID.eq(user.id));

        setCollections(result);
      } catch (error) {
        console.error("Error", error);
      }
    };
  
    fetchCollections();
  
    // Clean up function to cancel subscription when component is unmounted
    const subscription = DataStore.observe(Collection).subscribe(() => fetchCollections());
  
    return () => subscription.unsubscribe();
  
  }, [user.id]);
  


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewCollectionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div>
      <Header />
      <UserHeader 
        avatar={user.avatar} // Using the user data from the context
        firstName={user.firstName} // Using the user data from the context
        lastName={user.lastName} // Using the user data from the context
        username={user.username} // Using the user data from the context
        shareProfileLink="/share-profile"
      />
   
      <div class="flex flex-row justify-center m-6">
        <EmptyState onNewCollectionClick={handleNewCollectionClick} title='New Collection' />
        <NewCollectionModal isOpen={isModalOpen} onClose={handleCloseModal} user={user} />
        {collections.map((collection) => (
        <CollectionCard 
          image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
          image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
          image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
          collectionName={collection.collectionName}
          isUserCollection={true}
          url={`/collection/${collection.id}`}
          collection_id={collection.id}
        />
        ))}
      </div>
    </div>
  );
}

export default DesignLibrary;
