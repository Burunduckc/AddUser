import React, {useState} from 'react';

import {AddUser as Add} from "./components/Users/AddUser";
import {UserList as List} from "./components/Users/ListUsers";

function App() {
    const [usersList, setUsersList] = useState([])

    const addUser = (userName, userAge) => {
    setUsersList((prevUsersList) => {
    return [...prevUsersList,  {name: userName, age: userAge}];
    })
    }
  return (
    <div>
      <Add onAddUser = {addUser}/>
      <List users={usersList}/>
    </div>
  );
}

export default App;
