import React from 'react';

import {AddUser as Add} from "./components/Users/AddUser";
import {UserList as List} from "./components/Users/ListUsers";

function App() {
  return (
    <div>
      <Add/>
      <List users={[]}/>
    </div>
  );
}

export default App;
