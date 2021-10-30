import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserInfo from "./Components/Users/UserInfo";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserInfo users={usersList} />
    </div>
  );
}

export default App;
