import React, { Component } from 'react'
import Options from './Options'
import Total from './Total'

export default class Summary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Options selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    )
  }
} 
