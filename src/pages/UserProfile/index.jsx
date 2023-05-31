import React, { useContext, useState, useEffect } from 'react';
import UserProfileHeader from '../uiComponents/UserProfileHeader';
import CollectionCard from '../uiComponents/CollectionCard';
import Header from '../uiComponents/Header';
import { DataStore } from 'aws-amplify';
import { Collection } from '../../models';
import UserContext from '../../UserContext'

const UserProfile = () => {
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

  return (
    <div>
      <Header />
      <UserProfileHeader />
    <div className='flex justify-center pt-6'>
    <div class="grid grid-cols-4 gap-6 pb-6">
    {collections.map((collection) => (
        <CollectionCard 
          image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
          image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
          image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
          collectionName={collection.collectionName}
          isUserCollection={false}
          url={`/collection/${collection.id}`}
          collection_id={collection.id}
        />
        ))}
        </div>
    </div>
    </div>
  );
};

export default UserProfile;
