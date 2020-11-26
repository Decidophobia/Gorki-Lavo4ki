import React, { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageAC } from "../../redux/actionCreators";
import Message from "./Message";
import styles from "./Chat.module.css";
import { useParams } from "react-router-dom";

function Chat() {
  const [message, setMessage] = useState("");
  const [write, setWrite] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);
  const username = JSON.parse(localStorage.getItem("name"));
  const room = useParams().coordId;
  const messageText = (e) => {
    setMessage(e.target.value);
    // setWrite('Печатает')
  };
  const sendMessage = () => {
    dispatch(sendMessageAC(message));
    socket.emit("NEW_MESSAGE", message, room);
    setMessage("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) sendMessage();
  };
  useEffect(() => {
    socket.on("NEW_MESSAGE:CLIENT", (message) => {
      dispatch(sendMessageAC(message));
    });
    socket.emit("CONNECT_ROOM", room);
  }, []);

  useEffect(() => {
    socket.emit("WRITE_MESSAGE", username, room);
    socket.on("WRITE_MESSAGE:CLIENT", (user) => {
      setWrite(`${user} печатает...`);
      setTimeout(() => {
        setWrite("");
      }, 2000);

      console.log(user);
    });
  }, [message]);
  return (
    <div className={styles.chatContainer}>
      <div>{write}</div>
      <div className={styles.chatField}>
        {chat &&
          chat.map((oneMes, i) => (
            <Message oneMes={oneMes} key={oneMes + i} username={username} />
          ))}
      </div>
      <div className={styles.chatMassage}>
        <input
          name="massage-input"
          value={message}
          onChange={messageText}
          onKeyDown={onKeyDown}
        />
        <button className={styles.chatButton} onClick={sendMessage}>
          отправить
        </button>
      </div>
    </div>
  );
}

export default Chat;
