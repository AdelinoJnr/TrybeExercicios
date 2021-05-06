import React, { Component } from 'react';

class Option extends Component {
  render() {
    const { estado } = this.props
    return (
      <option value={estado}>{estado}</option>
    );
  }
}

export default Option;