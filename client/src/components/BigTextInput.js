import React, { Component } from 'react'

class BigTextInput extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
        cols="51"
        rows="4"
        className="text-input"
      />
    )
  }
}

export default BigTextInput
