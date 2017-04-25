import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.note.title,
      text: props.note.text,
      isEditing: false,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  editToggle() {
    if (!this.state.isEditing) {
      return (<i className="fa fa-pencil" aria-hidden="true" />);
    } else {
      return (<i className="fa fa-check" aria-hidden="true" />);
    }
  }

  renderTitle() {
    if (this.state.isEditing) {
      return (
        <div>
          <Textarea onChange={this.onTitleChange} value={this.state.title} />
        </div>
      );
    } else {
      return (
        <div className="note-title">{this.props.note.title}</div>
      );
    }
  }

  renderText() {
    if (this.state.isEditing) {
      return (
        <div>
          <Textarea onChange={this.onTextChange} value={this.state.text} />
        </div>
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />
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
              {this.renderTitle()}
              <div>
                <button onClick={() => this.props.onDelete(this.props.id)}>
                  <i className="fa fa-trash" aria-hidden="true" />
                </button>
                <button onClick={() => {
                  if (!this.state.isEditing) {
                    this.setState({ isEditing: true });
                  } else {
                    this.state.isEditing = false;
                    const newtitletext = {
                      title: this.state.title,
                      text: this.state.text,
                    };
                    this.props.onDoneEdit(this.props.id, newtitletext);
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
