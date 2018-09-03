import React, { Component } from 'react'
import styled from 'styled-components'

const Dbutton = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 15px 30px 15px 30px;
    transition: ease-in-out all 0.5s;
    cursor: pointer;
    margin: ${props => props.margin || "0px"};
    font-family: 'Muli', sans-serif;
    text-transform: uppercase;
    &:hover {
        background-color: #ffffff;
        color: #000000;
    }
`

class DpoButton extends Component {
  render() {
    return (
      <Dbutton margin={this.props.margin} onClick={this.props.triggerCase} data-vimeoID={this.props.vimeoID}>{this.props.t}</Dbutton>
    );
  }
}

export default DpoButton;
