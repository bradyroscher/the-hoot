import React, { Component } from 'react'

class TextInput extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        cols="51"
        rows="1"
      />
    )
  }
}

export default TextInput
