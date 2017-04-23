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
      <div>
        <input onChange={this.onInputChange} value={this.state.newnotetitle}
          placeholder="new note title"
        />
        <button onClick={() => this.props.onSubmit(this.state.newnotetitle)}>
          Submit
        </button>
      </div>
    );
  }
}

export default NewNoteBar;
