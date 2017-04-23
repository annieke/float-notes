import React, { Component } from 'react';
import Immutable from 'immutable';
import NewNoteBar from './new_note_bar';
import Note from './note';

class NoteBoard extends Component {
  constructor(props) {
    super(props);

    const initMap = {
      1: {
        id: 1,
        title: 'hi',
        text: 'hellooooo',
        x: 0,
        y: 0,
        zIndex: 0,
      },
      2: {
        id: 2,
        title: 'banana',
        text: 'apple',
        x: 10,
        y: 11,
        zIndex: 1,
      },
    };

    this.state = {
      notes: Immutable.Map(initMap),
      currID: 3,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(notetitle) {
    const newnote = {
      id: this.state.currID,
      title: notetitle,
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

  render() {
    const noteboard = this.state.notes.entrySeq().map(([id, note]) => {
      return <Note key={id} note={note} />;
    });

    return (
      <div>
        <NewNoteBar onSubmit={this.onSubmit} />
        {noteboard}
      </div>
    );
  }
}

export default NoteBoard;
