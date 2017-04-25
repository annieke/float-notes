import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Menu } from 'semantic-ui-react';
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

  renderNoteboardsMenu() {
    console.log(this.state);
    // renders buttons that let you select which noteboard
    // list which noteboard ids exist
    // always have default option
    return (
      <div className="top-menu">
        <Menu secondary>
          <Menu.Item name="default" active={this.state.currentBoardID === 'default'} />
          <Menu.Item name="add board" />
        </Menu>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNoteboardsMenu()}
        <NoteBoard id={this.state.currentBoardID} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
