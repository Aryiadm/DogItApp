import React from 'react';
import '../css/Meet.css';

const dogOwnerProfiles = [
  // Add your dog and owner profile objects here
  {
    dogName: "Buddy",
    ownerName: "Bowen Fan",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogOne.png`,
    ownerContact: "jane.doe@example.com",
  },
  {
    dogName: "Buddy",
    ownerName: "Aryia Dattamajumdar",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogTwo.png`,
    ownerContact: "jane.doe@example.com",
  },
  {
    dogName: "Buddy",
    ownerName: "Mariana Vasquez",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogThree.png`,
    ownerContact: "jane.doe@example.com",
  },
  {
    dogName: "Buddy",
    ownerName: "Mawil Hasan",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogFour.png`,
    ownerContact: "jane.doe@example.com",
  },
  {
    dogName: "Buddy",
    ownerName: "Salvador Alvedor",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogFive.png`,
    ownerContact: "jane.doe@example.com",
  },
  {
    dogName: "CS160",
    ownerName: "Bjoren Hartmann",
    bio: "Buddy loves playing fetch and cuddling.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogSix.png`,
    ownerContact: "jane.doe@example.com",
  },

];

const DogProfile = ({ profile }) => (
  <div className="profile">
    <img src={profile.imageUrl} alt={`${profile.dogName}`} className="profile-image" />
    <div className="profile-info">
      <h3>{profile.dogName}</h3>
      <p>Owned by {profile.ownerName}</p>
      <p>{profile.bio}</p>
      <p>Contact: {profile.ownerContact}</p>
    </div>
  </div>
);

const Meet = () => {
  return (
    <div className="settings-page">
      <h1>Dogs and Their Owners</h1>
      <div className="profile-container">
        {dogOwnerProfiles.map((profile, index) => (
          <DogProfile key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Meet;
