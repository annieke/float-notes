import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NoteBoard from './components/note_board';
import './style.scss';

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
        <NoteBoard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
