import React, { useState } from 'react';
import '../css/Meet.css';

const initialDogOwnerProfiles = [
    {
    dogName: "Buddy",
    ownerName: "Bowen Fan",
    bio: "Buddy loves playing fetch",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogOne.png`,
    ownerContact: "bowen@example.com",
  },
  {
    dogName: "Sunny",
    ownerName: "Aryia Dattamajumdar",
    bio: "Sunny likes to play ball in the sun",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogTwo.png`,
    ownerContact: "aryia@example.com",
  },
  {
    dogName: "Cloudy",
    ownerName: "Mariana Vasquez",
    bio: "Cloudy likes to go on walks.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogThree.png`,
    ownerContact: "mariana@example.com",
  },
  {
    dogName: "Rainy",
    ownerName: "Mawil Hasan",
    bio: "Rainy doesn't like going outside.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogFour.png`,
    ownerContact: "mawil@example.com",
  },
  {
    dogName: "Oreo",
    ownerName: "Salvador Alvedor",
    bio: "Oreo likes eating human oreos.",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogFive.png`,
    ownerContact: "salvador@example.com",
  },
  {
    dogName: "Sexy",
    ownerName: "Bjoren Hartmann",
    bio: "this dog teaches CS160 at UC Berkeley",
    imageUrl: `${process.env.PUBLIC_URL}/img/DogSix.png`,
    ownerContact: "sexy@example.com",
  },
];

const Meet = () => {
  const [profiles, setProfiles] = useState(initialDogOwnerProfiles);
  const [newProfile, setNewProfile] = useState({
    dogName: '',
    ownerName: '',
    bio: '',
    imageUrl: '',
    ownerContact: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
    
      const reader = new FileReader();

      reader.onload = (e) => {
        setNewProfile({ ...newProfile, imageUrl: e.target.result });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add a new profile to the profiles array
    setProfiles(profiles.concat(newProfile));
    // Reset the form fields
    setNewProfile({
      dogName: '',
      ownerName: '',
      bio: '',
      imageUrl: '',
      ownerContact: '',
    });
  };

  return (
    <div className="settings-page">
      <h2>Add Your Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <input
          type="text"
          name="dogName"
          value={newProfile.dogName}
          onChange={handleInputChange}
          placeholder="Dog's Name"
          required
        />
        <input
          type="text"
          name="ownerName"
          value={newProfile.ownerName}
          onChange={handleInputChange}
          placeholder="Owner's Name"
          required
        />
        <textarea
          name="bio"
          value={newProfile.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          required
        />
         <input
          type="file"
          name="image"
          onChange={handleImageChange}
          required
        />
        <input
          type="email"
          name="ownerContact"
          value={newProfile.ownerContact}
          onChange={handleInputChange}
          placeholder="Owner's Contact"
          required
        />
        <button type="submit">Add Profile</button>
      </form>
      <div className="profile-container">
        {profiles.map((profile, index) => (
          <DogProfile key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

const DogProfile = ({ profile }) => (
  <div className="profile">
    <img src={profile.imageUrl || `${process.env.PUBLIC_URL}/img/default-profile.png`} alt={`${profile.dogName}`} className="profile-image" />
    <div className="profile-info">
      <h3>{profile.dogName}</h3>
      <p>Owned by {profile.ownerName}</p>
      <p>{profile.bio}</p>
      <p>Contact: {profile.ownerContact}</p>
    </div>
  </div>
);

export default Meet;