import React, { useRef, useState } from "react";

import Card from "./../UI/Card/Card";
import Button from "./../UI/Card/Button";
import ErrorModal from "../UI/Card/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    console.log(enteredUsername, enteredAge);

    if (enteredUsername.trim().length === 0 || enteredAge.length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no empty values)",
      });
    }
    if (+enteredAge < 0) {
      return setError({
        title: "Invalid age",
        message: "Please enter a valid age (no empty values)",
      });
    }

    props.onAddUser(enteredUsername, enteredAge);
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          <input id="username" type="text" ref={usernameInputRef} />
          <label htmlFor="age"> Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button>
            <button type="submit">Add User</button>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
