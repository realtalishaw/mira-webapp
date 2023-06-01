import React, { useContext, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../../models';
import UserContext from '../../UserContext'
import Header from '../uiComponents/Header'

const Settings = () => {
  const { user: currentUser } = useContext(UserContext);
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleAvatarChange = (event) => {
    // Implement logic to upload avatar file
    // And update user state with the new avatar URL
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const updateUser= await DataStore.query(User, user.id);
    const updatedUser = await DataStore.save(
      User.copyOf(updateUser, updated => {
        updated.firstName = user.firstName;
        updated.lastName = user.lastName;
        updated.username = user.username;
        updated.bio = user.bio;
        updated.email = user.email;
        updated.website = user.website;
        updated.facebookLink = user.facebookLink;
        updated.instagramLink = user.instagramLink;
        updated.twitterLink = user.twitterLink;
        updated.avatar = user.avatar;
      })
    );
    console.log(updatedUser)
    setUser(updatedUser);
  };

  return (
    <>
    <Header />
    <h1 className='text-center text-5xl pt-6'>Profile Settings</h1>
    <div className="flex justify-center items-center  p-6 ">
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="flex space-x-6">
          <label className="w-full">
            First Name
            <input name="firstName" value={user.firstName} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
          <label className="w-full">
            Last Name
            <input name="lastName" value={user.lastName} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
        </div>

        <div className="flex space-x-6">
          <label className="w-full">
            Username
            <input name="username" value={user.username} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
          <label className="w-full">
            Email
            <input name="email" value={user.email} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
        </div>

        <div>
          <label className="w-full">
            Bio
            <textarea name="bio" value={user.bio} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
        </div>

        <div>
          <label className="w-full">
            Website
            <input name="website" value={user.website} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
        </div>

        <div className="flex space-x-6">
          <label className="w-full">
            Facebook Link
            <input name="facebookLink" value={user.facebookLink} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
          <label className="w-full">
            Instagram Link
            <input name="instagramLink" value={user.instagramLink} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
          <label className="w-full">
            Twitter Link
            <input name="twitterLink" value={user.twitterLink} onChange={handleInputChange} className="block w-full mt-1 px-4 py-2 border rounded-md" />
          </label>
        </div>

        <div className="flex space-x-6 items-center">
          <div>
            <label>
              Current Avatar
              <img src={user.avatar} alt="Current Avatar" className="block w-24 h-24 rounded-full mt-1" />
            </label>
          </div>
            <input type="file" onChange={handleAvatarChange} className="file-input block file-input-bordered w-full max-w-xs" />
          
        </div>
        <div className="text-right">
  <button type="submit" className="px-4 py-2 btn">Save Changes</button>
</div>

      </form>
    </div>
    </>
  );
 
}

export default Settings;
