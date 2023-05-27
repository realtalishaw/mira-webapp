import React from 'react';
import CollectionHeader from '../ui-components/CollectionHeader';
import Header from '../ui-components/Header';
import EmptyState from '../ui-components/EmptyState';
import DesignCard from '../ui-components/DesignCard';

const CollectionPage = () => {


  const designData = {
    image: 'https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp',
    name: 'Design Name',
  };

  return (
    <div>
    <Header />
        <CollectionHeader 
        collectionName="Spring Summer 2020"
        username="realtalishaw"
        avatarUrl="https://media.licdn.com/dms/image/C4D03AQHjsNK81swyCw/profile-displayphoto-shrink_800_800/0/1646697243923?e=2147483647&v=beta&t=7GAPczh0_-Cmt71hqDiaaiqGktw27XMK_8V_xj6c8S8"
        isPublic={true}
      />
<div className='grid grid-cols-4 gap-6 w-3/4 mx-auto'>
  <a href='/designstudio'><EmptyState  title='New Design' /></a>
  <DesignCard design={designData} isOwner={true} />
  <DesignCard design={designData} isOwner={true} />
  <DesignCard design={designData} isOwner={true} />
  <DesignCard design={designData} isOwner={true} />
  <DesignCard design={designData} isOwner={true} />
</div>

    </div>
  );
};

export default CollectionPage;
