import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import NoteBoard from './components/note_board';
import * as firebasedb from './firebasedb';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteboardIDs: Immutable.List(),
      currentBoardID: 'default',
    };
  }

  componentDidMount() {
    firebasedb.fetchNoteBoardIDs((noteboardIDs) => {
      this.setState({ noteboardIDs: Immutable.List(noteboardIDs) });
    });
  }

  renderNoteboardButtons() {
    console.log(this.state);
    // renders buttons that let you select which noteboard
    // list which noteboard ids exist
    // always have default option
  }

  render() {
    return (
      <div>
        <NoteBoard id={this.state.currentBoardID} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
