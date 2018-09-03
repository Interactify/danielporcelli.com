import React, { Component } from 'react'
import styled from 'styled-components'
import {media} from 'functions/media-query'

const ShowMason = styled.div`
    position: relative;
    line-height: 0px;
    padding-top: 10px;
    ${media.phone`
        text-align: center;
    `}
    &:hover {
        .item {
            opacity: 0.2;
            transition-delay: 0s;
        }
    }
    .item-container {
        overflow: hidden;
        height: 250px;
        width: 33.33%;
        padding: 10px;
        display: inline-block;
        ${media.desktop`
            height: 180px;
        `}
        ${media.tablet`
            width: 50%;
        `}
        ${media.phone`
            width: 100%;
            padding: 5px;
            margin-bottom: 10px;
            height: 300px;
        `}
    }
    .item {
        page-break-inside: avoid;
        break-inside: avoid;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: relative;
        overflow: hidden;
        display: inline-block;
        opacity: ${props => props.showCases ? "1" : "0"};
        transform: ${props => props.showCases ? "translateY(0px)" : "translateY(20px)"};

        .description {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            display: block;
            text-align: center;
            z-index: 2;
            h1 {
                font-size: 26px;
                line-height: 32px;
            }
            span {
                line-height: 18px;
                font-size: 14px;
            }
        }
        .backimage {
            position: absolute;
            z-index: 1;
            background-size: cover;
            background-position: center;
            height: 100%;
            width: 100%;
            transition: transform 10s ease;
        }
        &:hover {
            cursor: pointer;
            opacity: 1;
            .backimage {
                transform: scale(1.3);
            }   
        }
    }
`

const Item = styled.div`
    transition: opacity 2s ease ${props => props.delay || "0"}ms, transform 2s ease ${props => props.delay || "0"}ms;
`

class ShowRoom extends Component {
    render() {
        let cases = this.props.cases.map((dCase, i) => {
            return (
                <div className="item-container" key={`cases-${i}`}>
                    <Item delay={i * 300} onClick={(e) => { this.props.caseClick(i) }} className='item'>
                        <div className="description">
                            <h1>{dCase.title}</h1>
                        </div>
                        <div className="backimage" style={{backgroundImage: `url(${dCase.image.replace('/cms/images/','/images/cms/475/')})`}}/>
                    </Item>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ShowMason showCases={this.props.showCases}>
                            {cases}
                        </ShowMason>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowRoom;
