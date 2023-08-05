import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../UserContext'
import Header from '../uiComponents/Header'
import UserHeader from '../uiComponents/UserHeader'
import EmptyState from '../uiComponents/EmptyState';
import NewCollectionModal from '../uiComponents/NewCollectionModal';
import CollectionCard from '../uiComponents/CollectionCard';
import { DataStore } from 'aws-amplify';
import { Collection, Design } from '../../models';

const DesignLibrary = () => {
  const { user } = useContext(UserContext); // Access user context
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const result = await DataStore.query(Collection, c => c.userID.eq(user.id));
        const updatedCollections = await Promise.all(
          result.map(async (collection) => {
            const designs = await DataStore.query(Design, d => d.collectionID.eq(collection.id));
            return { ...collection, designs: designs.slice(0, 3) };
          })
        );
        console.log("collections", updatedCollections)
        setCollections(updatedCollections);
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
        shareProfileLink={`/@${user.username}`}
      />

      <div class="flex flex-row justify-center m-6">
        <EmptyState onNewCollectionClick={handleNewCollectionClick} title='New Collection' />
        <NewCollectionModal isOpen={isModalOpen} onClose={handleCloseModal} user={user} />
        {collections.map((collection) => (
          <CollectionCard
            designs={collection.designs}
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
