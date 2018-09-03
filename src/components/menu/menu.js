import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from 'components/logo/logo'
import {media} from 'functions/media-query'

const M = styled.div`
    position: fixed;
    /* top: ${props => props.top || "40px"}; */
    padding: ${props => props.top || "40px"};
    ${media.tablet`
        padding: ${props => props.top || "10px"};
        background-color: ${props => props.showMobileMenu ? "rgba(0,0,0,.6)" : "rgba(0,0,0,0)"};
        padding-bottom: 20px;
        max-height: ${props => props.showMobileMenu ? "220px" : "83px"};
        overflow: hidden;
        transition-delay: ${props => props.showMobileMenu ? "0s" : "1.2s"};
        padding-bottom: 30px;
        max-height: 220px;
    `}
    left: 0px;
    width: 100%;
    z-index: 10;
    text-align: center;
    transition: background-color 0.5s linear 0.5s, padding 0.2s linear 0.2s, max-height 0.2s linear 0.2s;
    background-color: ${props => props.backgroundColor || "transparent"};
    ul {
        display: inline-block;
        ${media.tablet`
            display: block;
            margin: 0px;
            padding: 15px 0px 0px 0px;
        `}
        list-style: none;
        li {
            float: left;
            padding: 0px 40px;
            ${media.tablet`
                float: none;
                padding: 10px 0px 0px 0px !important;
                transition: ease all 1s;
                &:nth-child(1) {
                    transition-delay: 0.5s;
                }
                &:nth-child(2) {
                    transition-delay: 0.8s;
                }
                &:nth-child(3) {
                    transition-delay: 1s;
                }
                &:nth-child(4) {
                    transition-delay: 1.2s;
                }
                opacity: ${props => props.showMobileMenu ? "1" : "0"};
                transform: ${props => props.showMobileMenu ? "translateX(0px)" : "translateX(30px)"};
            `}
            ${media.tablet`
                padding: 0px 10px;
            `}
            a {
                color: ${props => props.textColor || "#ffffff"};
                ${media.tablet`
                    color: #ffffff;
                `}
                display: block;
                text-decoration: none;
                cursor: pointer;
                transition: transform 0.2s ease-in-out 0s, color 1s ease-in-out 0s;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
    
    #mobile-icon {
    position: absolute;
    top: 17px;
    right: 15px;
    width: 40px;
    height: 40px;
    }


    #mobile-icon {
    width: 30px;
    height: 25px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    display: none;
    }

    ${media.tablet`
        #mobile-icon {
        display: block;
        }
    `}

    #mobile-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #ffffff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    }

    #mobile-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #mobile-icon span:nth-child(2) {
    top: 8px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #mobile-icon span:nth-child(3) {
    top: 16px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    }

    #mobile-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
    }

    #mobile-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
    }

    #mobile-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 19px;
    left: 8px;
    }
`

class Menu extends Component {
    state = {
        menuColor: null,
        bcolor: '#ffffff',
        tcolor: '#000000',
        backgroundColor: '',
        top: '',
        showMobileMenu: false
    }
    toggleMenu = () => {
        this.setState({
            showMobileMenu: !this.state.showMobileMenu
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            var rect = document.getElementsByClassName("swiper-container")[0].getBoundingClientRect()
            if (rect.bottom <= 120) {
                if (this.state.bcolor !== '#000000') {
                    this.setState({
                        bcolor: '#000000',
                        tcolor: '#ffffff',
                        backgroundColor: '#ffffff',
                        top: '10px'
                    })
                }
            } else {
                if (this.state.bcolor !== '#ffffff') {
                    this.setState({
                        bcolor: '#ffffff',
                        tcolor: '#000000',
                        backgroundColor: '',
                        top: ''
                    })
                }
            }
        }, {passive: true})
    }
    render() {
        return (
            <M textColor={this.state.bcolor} backgroundColor={this.state.backgroundColor} top={this.state.top} showMobileMenu={this.state.showMobileMenu}>
                <div className="container desktop">
                    <div className="row">
                        <div className="col-md-12">
                            <a onClick={() => { this.props.dpoScroll('slider', 1000) }}><Logo tcolor={this.state.tcolor} bcolor={this.state.bcolor} /></a>
                            <ul>
                                <li>
                                    <a onClick={() => { this.props.dpoScroll('cases', 1000) }}>Cases</a>
                                </li>
                                <li>
                                    <a onClick={() => { this.props.dpoScroll('work', 1000) }}>Work</a>
                                </li>
                                
                                <li>
                                    <a onClick={() => { this.props.dpoScroll('contact', 1000) }}>Contact</a>
                                </li>
                            </ul>
                            <div id="mobile-icon" onClick={this.toggleMenu} className={this.state.showMobileMenu ? 'open' : ''}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </M>
        );
    }
}

export default Menu;
