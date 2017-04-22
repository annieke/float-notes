import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewNoteBar from './components/new_note_bar';
import NoteBoard from './components/note_board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteboards: [],
      currentBoard: null,
    };
  }

  render() {
    return (
      <div>
        <NewNoteBar />
        <NoteBoard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
