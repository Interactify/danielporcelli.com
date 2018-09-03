import React, { Component } from 'react'
import Menu from 'components/menu/menu'
import Slider from 'components/slider/slider'
import Work from 'components/work/work'
import Footer from 'components/footer/footer'
import CaseDetails from 'components/case-details/case-details'
// import Dataset from './dataset'
import ShowRoom from 'components/showroom/showroom'
import styled from 'styled-components'
import {getSlides} from 'functions/api'

const AppDiv = styled.div`
  opacity: ${props => props.showSite ? "1" : "1"};
  transition: opacity ease 4s;
`

class App extends Component {
  state = {
    showWork: false,
    showCaseDetails: false,
    vimeoId: null,
    showCases: false,
    showSite: false,
    slides: []
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        showSite: true
      })
    },100)
    window.addEventListener('scroll', (e) => {
        var rect = this.refs.workclass.getBoundingClientRect()
        if (rect.top <= 320) {
          if (!this.state.showWork) {
            this.setState({
              showWork: true
            })
          }
        } else {
          if (this.state.showWork) {
            this.setState({
              showWork: false
            })
          }
        }
    }, {passive: true})
    window.addEventListener('scroll', (e) => {
        var rect = this.refs.cases.getBoundingClientRect()
        if (rect.top <= 320) {
          if (!this.state.showCases) {
            this.setState({
              showCases: true
            })
          }
        } else {
          if (this.state.showCases) {
            this.setState({
              showCases: false
            })
          }
        }
    }, {passive: true})
  }
  triggerCase = (e) => {
    this.setState({
      vimeoId: e.currentTarget.getAttribute('data-vimeoID'),
      showCaseDetails: true
    })
  }
  closeCase = () => {
    this.setState({
      vimeoId: null,
      showCaseDetails: false
    })
  }

  scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      this.scrollTo(element, to, duration - 10);
    }.bind(this), 10);
  }
  handleScroll = () => {
    this.scrollTo(document.body, 1000, 2000)
  }
  caseClick = (cid) => {
    this.dpoScroll('slider', 1000)
    setTimeout(
      () => {
        this.refs.home.changeSlide(cid)
      }, 200
    )
  }
  dpoScroll = (id, duration) => {
    let element = document.getElementById(id).getBoundingClientRect(),
    bElem = document.body.getBoundingClientRect(),
    offset = element.top - bElem.top;
    this.scrollTo(document.body, offset - 100, duration)
  }
  componentWillMount() {
    getSlides().then((s) => {
      this.setState({
        slides: s.data
      })
    })
  }
  render() {
    return (
      <AppDiv showSite={this.state.showSite}>
        <Menu dpoScroll={this.dpoScroll} home={this.refs.home} work={this.refs.work} contact={this.refs.contact} />
        {this.state.showCaseDetails ? <CaseDetails show={this.state.showCaseDetails} vimeoId={this.state.vimeoId} closeCase={this.closeCase} /> : ''}
        <div id="slider">
          <Slider cases={this.state.slides} ref="home" triggerCase={this.triggerCase} />
        </div>
        <div id="cases" ref="cases">
          <ShowRoom caseClick={this.caseClick} showCases={this.state.showCases} cases={this.state.slides} />
        </div>
        <div id="work" ref="workclass">
          <Work ref="work" showWork={this.state.showWork} />
        </div>
        <div id="contact">
          <Footer ref="contact" />
        </div>
      </AppDiv>
    );
  }
}

export default App;
