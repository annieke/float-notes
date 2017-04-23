import React, { Component } from 'react';
import Immutable from 'immutable';
import NewNoteBar from './new_note_bar';
import Note from './note';

class NoteBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map(),
      currID: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDoneEdit = this.onDoneEdit.bind(this);
  }

  onSubmit(newnotetitle) {
    const newnote = {
      id: this.state.currID,
      title: newnotetitle,
      text: '',
      x: 0,
      y: 0,
      zIndex: this.state.currID,
    };
    this.setState({
      notes: this.state.notes.set(this.state.currID, newnote),
    });
    this.state.currID += 1;
  }

  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  onDoneEdit(IDtext) {
    this.setState({
      notes: this.state.notes.update(IDtext.id, (n) => {
        return Object.assign({}, n, IDtext);
      }),
    });
  }

  render() {
    const noteboard = this.state.notes.entrySeq().map(([id, note]) => {
      return (<Note key={id} note={note}
        onDelete={this.onDelete} onDoneEdit={this.onDoneEdit}
      />);
    });

    return (
      <div>
        <NewNoteBar onSubmit={this.onSubmit} />
        <div>
          {noteboard}
        </div>
      </div>
    );
  }
}

export default NoteBoard;
