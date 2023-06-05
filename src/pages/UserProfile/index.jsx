import React, { useContext, useState, useEffect } from 'react';
import UserProfileHeader from '../uiComponents/UserProfileHeader';
import CollectionCard from '../uiComponents/CollectionCard';
import Header from '../uiComponents/Header';
import { DataStore } from 'aws-amplify';
import { Collection, Design } from '../../models';
import UserContext from '../../UserContext'

const UserProfile = () => {
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
  

  return (
    <div>
      <Header />
      <UserProfileHeader />
    <div className='flex justify-center pt-6'>
    <div class="grid grid-cols-4 gap-6 pb-6">
    {collections.map((collection) => (
  <CollectionCard 
    designs={collection.designs}
    collectionName={collection.collectionName}
    isUserCollection={false}
    url={`/collection/${collection.id}/${collection.collectionName}`}
    collection_id={collection.id}
  />
))}

        </div>
    </div>
    </div>
  );
};

export default UserProfile;
