import React from 'react';
import '../css/Community.css';

const Community = () => {
  return (
    <div className="community-container">
      <img
        src = {`${process.env.PUBLIC_URL}/img/banner.png`} 
        alt="Community Banner"
        className="community-banner"
      />
      <div className="community-description">
        <h1>Welcome to Dogit!</h1>
        <p>Our mission is to simplify the lives of busy dog owners by providing a comprehensive solution that alleviates the management of dogs by providing schedule planners, health trackers, and a possibility of a social life through interactions to other dog-owners. Through our user-friendly interface, we strive to become the go-to platform for dog owners seeking a systematic way to improve and alleviate dog’s lives and owner’s stress. 
</p>
      </div>
    </div>
  );
};

export default Community;

