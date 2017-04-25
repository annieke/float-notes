import React, { Component } from 'react';
import Immutable from 'immutable';
import * as firebasedb from '../firebasedb';
import NewNoteBar from './new_note_bar';
import Note from './note';

class NoteBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map(),
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDoneEdit = this.onDoneEdit.bind(this);
  }

  componentDidMount() {
    firebasedb.fetchNoteBoard(this.props.id, (noteboard) => {
      this.setState({ notes: Immutable.Map(noteboard) });
    });
  }

  onSubmit(newnotetitle) {
    const newnote = {
      title: newnotetitle,
      text: '',
      x: 0,
      y: 0,
      zIndex: this.state.notes.size + 1,
    };
    firebasedb.addNote(this.props.id, newnote);
  }

  onDelete(id) {
    firebasedb.removeNote(this.props.id, id);
  }

  onDoneEdit(IDtext) {
    this.setState({
      notes: this.state.notes.update(IDtext.id, (n) => {
        return Object.assign({}, n, IDtext);
      }),
    });
    const updatednote = this.state.notes.get(IDtext.id);
    firebasedb.editNote(this.props.id, IDtext.id, updatednote);
  }

  render() {
    const noteboard = this.state.notes.entrySeq().map(([id, note]) => {
      return (<Note id={id} key={id} note={note}
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
