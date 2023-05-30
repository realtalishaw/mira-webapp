import React from 'react';
import UserProfileHeader from '../uiComponents/UserProfileHeader';
import CollectionCard from '../uiComponents/CollectionCard';
import Header from '../uiComponents/Header';
const UserProfile = () => {
  return (
    <div>
      <Header />
      <UserProfileHeader 
        avatar="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        firstName="John"
        lastName="Doe"
        username="johndoe"
        following={234}
        followers={456}
        likes={789}
        twitterLink="https://twitter.com/johndoe"
        facebookLink="https://facebook.com/johndoe"
        tiktokLink="https://tiktok.com/@johndoe"
        bio="I'm John Doe, a web developer based in California. I love creating beautiful, responsive, and performant websites."
        url="https://www.johndoe.com"
        shareProfileLink="https://www.johndoe.com/share"
      />
    <div className='flex justify-center pt-6'>
    <div class="grid grid-cols-4 gap-6 pb-6">
        <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={false}
        url="/collection"
      />
        <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={false}
        url="/collection"
      />
        <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={false}
        url="/collection"
      />
        <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={false}
        url="/collection"
      />
        <CollectionCard 
        image1="https://img1.shopcider.com/product/1672746341000-KFdRHt.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1"
        image2="https://img1.shopcider.com/product/1678538066000-RFRRDk.jpg?x-oss-process=image/resize,w_1400,m_lfit/quality,Q_80/interlace,1"
        image3="https://img.ltwebstatic.com/images3_pi/2023/05/02/1683011192bd134598c37f84be64e119ee36bd7c8b_thumbnail_900x.webp"
        collectionName="My Collection"
        isUserCollection={false}
        url="/collection"
      />
        </div>
    </div>
    </div>
  );
};

export default UserProfile;
