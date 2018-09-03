import React, { Component } from 'react'
import styled from 'styled-components'

const LogoSvg = styled.svg`
    width: ${props => props.width || '50'}px;
    height: ${props => props.height || '50'}px;
    display: inline-block;
    transform: ${props => props.tcolor === '#000000' ? 'rotate(360deg)' : 'rotate(0deg)'};
    transition: all ease-in-out 0.5s;
    .cls-2 {
        transition: ease-in-out fill 1s;
        fill: ${props => props.tcolor || '#000000'};
    }
    .cls-1 {
        fill: ${props => props.bcolor || "#FFFFFF"};
        transition: ease-in-out fill 1s;
    }
`

class Logo extends Component {
  render() {
    return (
        <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.02 51.02" height={this.props.height} width={this.props.width} tcolor={this.props.tcolor} bcolor={this.props.bcolor}>
            <circle className="cls-1" cx="25.51" cy="25.51" r="25.51"/>
            <path className="cls-2" d="M26.8,12.35v26.5H24.6V35.39a5.85,5.85,0,0,1-2.39,2.75,7.36,7.36,0,0,1-3.83,1,7.58,7.58,0,0,1-4.19-1.17,7.74,7.74,0,0,1-2.83-3.31,11.5,11.5,0,0,1-1-5,11.43,11.43,0,0,1,1-4.91,7.43,7.43,0,0,1,2.81-3.24,7.83,7.83,0,0,1,4.23-1.13,7.4,7.4,0,0,1,3.8.94A6,6,0,0,1,24.6,24V12.35h2.2ZM23.06,35.21a8.58,8.58,0,0,0,1.55-5.47,8.67,8.67,0,0,0-1.55-5.49,5.23,5.23,0,0,0-4.36-2,5.43,5.43,0,0,0-4.46,1.94,8.38,8.38,0,0,0-1.58,5.44,8.59,8.59,0,0,0,1.58,5.51,5.35,5.35,0,0,0,4.43,2A5.29,5.29,0,0,0,23.06,35.21Z"/>
            <path className="cls-2" d="M37.45,13.55a7.76,7.76,0,0,1,2.83,3.31,11.51,11.51,0,0,1,1,4.95,11.32,11.32,0,0,1-1,4.9,7.54,7.54,0,0,1-2.83,3.24,7.76,7.76,0,0,1-4.21,1.15,7.22,7.22,0,0,1-3.87-1A6,6,0,0,1,27,27.24V38.62H24.83V17.81a39,39,0,0,0-.29-5h2.09l0.29,3.53a6.12,6.12,0,0,1,2.43-2.93,7.21,7.21,0,0,1,3.91-1A7.58,7.58,0,0,1,37.45,13.55ZM37.4,27.23A8.31,8.31,0,0,0,39,21.81a8.68,8.68,0,0,0-1.58-5.53,5.29,5.29,0,0,0-4.39-2,5.33,5.33,0,0,0-4.43,1.94A8.65,8.65,0,0,0,27,21.74a8.58,8.58,0,0,0,1.55,5.47A5.29,5.29,0,0,0,33,29.15,5.41,5.41,0,0,0,37.4,27.23Z"/>
        </LogoSvg>
    );
  }
}

export default Logo;
