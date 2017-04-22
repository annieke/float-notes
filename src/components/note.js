import React from 'react';
// import Draggable from 'react-draggable';

const Note = (props) => {
  const title = props.note.title;
  const text = props.note.text;

  return (
    <div>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default Note;
