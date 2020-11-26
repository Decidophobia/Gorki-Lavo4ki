import React from 'react';

function Comment({ el }) {
 
  return (
    <div>
      <b>Name:</b> {el.user}
      <br />
      <b>Comment:</b> {el.text}
      <br />
      <b>Date:</b> {new Date(el.date).toDateString()} <br/>
      {new Date(el.date).getHours()}    :   {new Date(el.date).getMinutes()}
    </div>
  );
}

export default Comment;
