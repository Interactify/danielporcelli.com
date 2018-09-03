import React, { Component } from 'react'
import styled from 'styled-components'
import Player from '@vimeo/player'
import Spinner from '../spinner/spinner'

const CaseOverlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: ${props => props.showCaseOverlay ? '1' : '0'};
    visibility: ${props => props.showCaseOverlay ? 'visible' : 'hidden'};
    transition: ease 1s all;
    .case-video {
        background-color: rgba(0,0,0,1);
        height: 100vh;
        width: 100%;
    }
    .load-overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: #000000;
        z-index: 11;
        height: 100%;
        width: 100%;
        transition: ease 4s all;
        transition-delay: 1s;
        opacity: ${props => props.loadOverlay ? '1' : '0'};
        visibility: ${props => props.loadOverlay ? 'visible' : 'hidden'};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .close {
        position: absolute;
        right: 30px;
        top: 20px;
        font-size: 30px;
        z-index: 12;
        img {
            width: 20px;
            height: 20px;
            opacity: 0.6;
            transition: all ease 1s;
            cursor: pointer;
            transform: scale(0.7);
            &:hover {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
`

class CaseDetails extends Component {
    state = {
        buffered: false,
        show: false
    }
    componentDidMount() {
        this.iframe = this.refs.vimeoIframe;
        this.player = new Player(this.iframe);
        this.player.on('progress', function(progress) {
            if(parseFloat(progress.percent) >= 0.3) {
                if (!this.state.buffered) {
                    this.player.setCurrentTime(0)
                    this.player.setVolume(1)
                    this.setState({buffered: true})
                }
            }
        }.bind(this))

        this.player.on('loaded', function(load) {
            this.player.setVolume(0)
            this.player.play()
        }.bind(this))
        setTimeout(()=>{
            this.setState({show: true})
        },200)
    }
    closeCase = () => {
        this.setState({show: false},()=>{
            setTimeout(function() {
                this.props.closeCase()
            }.bind(this), 1000);
        })
    }
    render() {
        return (
            <CaseOverlay loadOverlay={!this.state.buffered} showCaseOverlay={this.state.show}>
                <div className="case-video">
                    <div className="close" onClick={this.closeCase}>
                        <img src="images/close.svg" alt="close"/>
                    </div>
                    <div className="load-overlay">
                        <Spinner />
                    </div>
                    <iframe title="vimeoplayer" ref="vimeoIframe" src={`https://player.vimeo.com/video/${this.props.vimeoId}`} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
            </CaseOverlay>
        );
    }
}

export default CaseDetails;
