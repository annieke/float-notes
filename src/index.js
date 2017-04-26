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
      noteboardIDs: Immutable.Map(),
      currentBoardID: 'default',
    };
  }

  componentDidMount() {
    firebasedb.fetchNoteBoardIDs((noteboardIDs) => {
      this.setState({ noteboardIDs: Immutable.Map(noteboardIDs) });
    });
  }

  addNewBoard() {
    const newboardID = firebasedb.createBoard();
    const boardinfo = {
      name: this.state.noteboardIDs.size + 1,
    };
    firebasedb.nameBoard(newboardID, boardinfo);
  }

  renderNoteboardsMenu() {
    const noteboards = this.state.noteboardIDs.entrySeq().map(([id, noteboard]) => {
      return (<Menu.Item key={id} id={id} name={noteboard.name.toString()}
        active={this.state.currentBoardID === id}
        onClick={() => this.setState({ currentBoardID: id })}
      />);
    });
    return (
      <div className="top-menu">
        <Menu secondary>
          <Menu.Item name="default" active={this.state.currentBoardID === 'default'}
            onClick={() => this.setState({ currentBoardID: 'default' })}
          />
          {noteboards}
          <Menu.Item name="add board" onClick={() => this.addNewBoard()} />
        </Menu>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNoteboardsMenu()}
        <NoteBoard key={this.state.currentBoardID} id={this.state.currentBoardID} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
