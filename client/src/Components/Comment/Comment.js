import React from 'react';
import style from './Comment.module.css' 
function Comment({ el }) {
  const color = `rgb(240,${0.5*Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  return (
    <div className={style.container}>
       <div className={style.author} style={{color}}>{el.user}</div>
      <div className={style.text}>{el.text}</div> 
      <br />
      <div className={style.date}>{new Date(el.date).toDateString()} <br/>
      {new Date(el.date).getHours()}    :   {new Date(el.date).getMinutes()}</div> 
    </div>
  );
}

export default Comment;
