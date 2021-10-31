import React from "react";

import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <Card>
      <header className="header">
        <h2>{props.title.title}</h2>
      </header>
      <div className="content">{props.title.message}</div>
      <footer>
        <Button>
          <button onClick={props.onCloseErrorModal}>Okay!</button>
        </Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
