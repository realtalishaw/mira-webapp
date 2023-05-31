import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CollectionHeader from '../uiComponents/CollectionHeader';
import Header from '../uiComponents/Header';
import EmptyState from '../uiComponents/EmptyState';
import DesignCard from '../uiComponents/DesignCard';
import { DataStore } from '@aws-amplify/datastore';
import { Design, Collection } from '../../models';
import UserContext from '../../UserContext'

const CollectionPage = () => {
  const { user } = useContext(UserContext);
  const { collection_id } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState(null);
  const [designs, setDesigns] = useState([]);

  const newDesign = async (event) => {
    event.preventDefault();
    const designInput = {
      collectionID: collection_id,
      userID: user.id,
      name: 'untitled',
    };

    try {
      const result = await DataStore.save(new Design(designInput));
      console.log("Design Created: ", result);
      setDesigns([...designs, result]); // add the new design to the list
      navigate(`/designstudio/${result.id}`);
    } catch (error) {
      console.error("Error creating new design: ", error);
    }
  }

  useEffect(() => {
    const loadCollectionAndDesigns = async () => {
      const loadedCollection = await DataStore.query(Collection, collection_id);
  
      // Query designs related to the collection
      const loadedDesigns = (await DataStore.query(Design)).filter(design => design.collectionID === collection_id);
  
      setCollection(loadedCollection);
      setDesigns(loadedDesigns);
    }
  
    loadCollectionAndDesigns();
  }, [collection_id]);
  

  return (
    <div>
      <Header />
      <CollectionHeader
        collectionName={collection?.name}
        username={user.username}
        avatarUrl={user.avatar}
        isPublic={true}
      />
      <div className='grid grid-cols-4 gap-6 w-3/4 mx-auto'>
        <EmptyState onNewCollectionClick={newDesign} title='New Design' />
        {designs.map(design => (
          <DesignCard key={design.id} design={{ name: design.name, image: design.designImage }} isOwner={true} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
