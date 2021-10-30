import React from "react";

import Card from "./../UI/Card/Card";
import './UserInfo.css'

const UserInfo = (props) => {
  return (
      <Card>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          );
        })}
      </ul>
      </Card>
    
  );
};

export default UserInfo;
