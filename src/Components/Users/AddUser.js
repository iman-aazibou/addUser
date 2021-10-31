import React, { useState } from "react";

import Card from "./../UI/Card/Card";
import Button from "./../UI/Card/Button";
import ErrorModal from "../UI/Card/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userInput.trim().length === 0 || ageInput.length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no empty values)",
      });
    }
    if (+ageInput < 0) {
      return setError({
        title: "Invalid age",
        message: "Please enter a valid age (no empty values)",
      });
    }

    props.onAddUser(userInput, ageInput);
    setUserInput("");
    setAgeInput("");
  };

  const userChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandling = () => {
    return setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error} onCloseErrorModal={errorHandling} />}
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
    </div>
  );
};

export default AddUser;
