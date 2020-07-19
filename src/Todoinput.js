import React, { useState, useEffect } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import Todolist from "./TodoList";
import FlipMove from "react-flip-move";
import { TextField, Button, ListItem, List } from "@material-ui/core";
import "./styles.css";

function Todoinput() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,

      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };

  return (
    <div className="fb">
      <h1>App</h1>
      <form className="TodoListmain">
        <List component="todinput">
          <ListItem>
            <TextField
              id="standard-size-normal"
              className="files"
              label=" Add to List "
              variant="filled"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </ListItem>
          <ListItem class="mainbtn">
            <Button
              disabled={!input}
              className="addBtn"
              type="submit"
              variant="contained"
              color="primary"
              onClick={sendMessage}
            >
              Add To List
            </Button>
            <Button
              className="addBtn"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Clear List
            </Button>
          </ListItem>
        </List>
      </form>
      <Todolist />
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Todoinput;
