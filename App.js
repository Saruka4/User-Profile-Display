import React from 'react';
import './App.css';
import UserList from './components/UserList';

const users = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 32 },
];

function App() {
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;

