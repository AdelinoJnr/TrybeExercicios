import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <button onClick={this.props.click}>Proximo</button>
    );
  }
}

export default Button;