import React, { Component } from 'react'

export default class Car extends Component {

    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>Car Model : {this.props.model}</div>
    )
  }
}

