import React from 'react';
import Draggable from 'react-draggable';

const Note = (props) => {
  const title = props.note.title;
  const text = props.note.text;
  // const noteX = props.note.x;
  // const noteY = props.note.y;
  // DEBUG FIGURE OUT WHAT TO DO

  return (
    <Draggable
      handle=".drag-button"
      grid={[25, 25]}
      defaultPosition={{ x: 20, y: 20 }}
      position={null}
      onStart={Draggable.handleStart}
      onDrag={Draggable.handleDrag}
      onStop={Draggable.handleStop}
    >
      <div className="note">
        <div className="row">
          <div>
            <div className="note-title">{title}</div>
            <div>
              <button>
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
              <button>
                <i className="fa fa-pencil" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div>
            <button className="drag-button">
              <i className="fa fa-arrows-alt" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div>{text}</div>
      </div>
    </Draggable>
  );
};

export default Note;
