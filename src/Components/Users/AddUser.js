import React, { useState } from "react";

import Card from "./../UI/Card/Card";
import Button from "./../UI/Card/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userInput.trim().length === 0 || ageInput.length === 0) {
      alert("user error");
      return;
    } if(+ageInput < 0){
      return;
    }

    console.log(userInput, ageInput);
    setUserInput("");
    setAgeInput("");
  };

  const userChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  return (
    <Card>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={userChangeHandler}
          value={userInput}
          id="username"
          type="text"
        />
        <label htmlFor="age"> Age (Years)</label>
        <input
          onChange={ageChangeHandler}
          value={ageInput}
          id="age"
          type="number"
        />
        <Button>
          <button type="submit">Add User</button>
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
