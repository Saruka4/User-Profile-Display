import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
