import React, { Component } from 'react';


class NewNoteBar extends Component {
  constructor(props) {
    super(props);

    this.state = { newnotetitle: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ newnotetitle: event.target.value });
  }

  render() {
    return (
      <div className="header">
        <div className="ui action input new-note-bar">
          <input onChange={this.onInputChange} value={this.state.newnotetitle}
            placeholder="new note title"
          />
          <button className="ui primary button"
            onClick={() => this.props.onSubmit(this.state.newnotetitle)}
          >
          Submit
        </button>
        </div>
      </div>
    );
  }
}

export default NewNoteBar;
