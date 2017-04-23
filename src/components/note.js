import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.note.id,
      title: props.note.title,
      text: props.note.text,
      onDelete: props.onDelete,
      onDoneEdit: props.onDoneEdit,
      isEditing: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  editToggle() {
    if (!this.state.isEditing) {
      return (<i className="fa fa-pencil" aria-hidden="true" />);
    } else {
      return (<i className="fa fa-check" aria-hidden="true" />);
    }
  }

  renderText() {
    if (this.state.isEditing) {
      return (
        <div>
          <Textarea onChange={this.onInputChange} value={this.state.text} />
        </div>
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: marked(this.state.text || '') }} />
      );
    }
  }

  render() {
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
            <div className="title-container">
              <div className="note-title">{this.state.title}</div>
              <div>
                <button onClick={() => this.state.onDelete(this.state.id)}>
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
                <button onClick={() => {
                  if (!this.state.isEditing) {
                    this.setState({ isEditing: true });
                  } else {
                    this.state.isEditing = false;
                    const IDtext = {
                      id: this.state.id,
                      text: this.state.text,
                    };
                    this.state.onDoneEdit(IDtext);
                  }
                }}
                >
                  {this.editToggle()}
                </button>
              </div>
            </div>

            <div>
              <button className="drag-button">
                <i className="fa fa-arrows-alt" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div>
            {this.renderText()}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
