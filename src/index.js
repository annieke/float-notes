import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import NoteBoard from './components/note_board';
import * as firebasedb from '../firebasedb';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteboards: Immutable.Map(),
      currentBoardID: 0,
    };
    this.renderNoteboard = this.renderNoteboard.bind(this);
  }

  componentDidMount() {
    firebasedb.fetchNotes();
  }

  createNote() {
    if (this.state.noteboards.size > 0) {
      this.setState({ currentBoardID: firebasedb.createBoard() });
    }
    // createNOte
  }

  renderNoteboard() {
    if (this.state.noteboards.size > 0) {
      return <NoteBoard id={this.state.currentBoardID} />;
    } else {
      return null;
    }
  }

  renderNoteboardButtons() {
    // renders buttons that let you select which noteboard
  }

  render() {
    return (
      <div>
        {this.renderNoteboard()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
