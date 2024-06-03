import React from 'react';
import UserProfile from './UserProfile';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
