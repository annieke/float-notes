import React, { Component } from 'react';
import Immutable from 'immutable';
import Note from './note';

class NoteBoard extends Component {
  constructor(props) {
    super(props);

    const initMap = {
      1: {
        title: 'hi',
        text: 'hellooooo',
        x: 0,
        y: 0,
        zIndex: 0,
      },
      2: {
        title: 'banana',
        text: 'apple',
        x: 10,
        y: 11,
        zIndex: 1,
      },
    };

    this.state = {
      notes: Immutable.Map(initMap),
    };
  }

  render() {
    const noteboard = this.state.notes.entrySeq().map(([id, note]) => {
      return <Note key={id} note={note} />;
    });

    return (
      <div>
        {noteboard}
      </div>
    );
  }
}

export default NoteBoard;
