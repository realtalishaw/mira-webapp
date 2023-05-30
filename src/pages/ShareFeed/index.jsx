import React from 'react';
import SocialCard from '../uiComponents/SocialCard';
import Header  from '../uiComponents/Header';

const ShareFeed = () => {
  const socialCardsData = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      username: "JohnDoe",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      shareLink: "http://example.com/share/1",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      username: "JaneDoe",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      shareLink: "http://example.com/share/2",
    },
    ,
    {
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      username: "JaneDoe",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      shareLink: "http://example.com/share/2",
    },
    ,
    {
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      username: "JaneDoe",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      shareLink: "http://example.com/share/2",
    },
    ,
    {
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      username: "JaneDoe",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      shareLink: "http://example.com/share/2",
    },
  ];

  return (
    <div>
      <Header />
    <h1 className="text-center text-5xl p-4"> Design Something Magical✨</h1>
    <p className="text-center text-xl p-1 ">Get inspired by the community and see what Mira can help you create. Mira helps you design whatever you can imagine.</p>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 p-12">
    {socialCardsData.map((cardData, idx) => (
      <SocialCard 
        key={idx} 
        avatar={cardData.avatar}
        username={cardData.username}
        image={cardData.image}
        shareLink={cardData.shareLink}
      />
 
  ))}
              </div>

   </div>
  );
};

export default ShareFeed;
