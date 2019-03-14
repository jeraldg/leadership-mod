import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'
import { Container, Option } from './Components'


export default class OptionsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      ended: false,
      playing: false,
      muted: true,
      changed: false,
      url: props.url,
    }
  }

  componentWillUnmount = () => {
    // use timerId from the state to clear the interval
    clearInterval(this.state.progressBarTimer, this.state.progressBarShow);
  }

  handleOnReady = () => {
    setTimeout(() => {
      this.setState({ muted: false, playing: true });
    }, 100);
  }

  handleClick = (url) => {
    FlowRouter.go(`/${url}`);
    clearInterval(this.state.progressBarTimer, this.state.progressBarShow);
    this.setState({
      percent: 0,
      ended: false,
      playing: false,
      muted: true,
      changed: false,
      url: this.props.options[0].url,
    })
  }

  onEnded = () => {
    this.setState({ ended: true });
    if (this.props.options.length == 0){
      this.handleClick(this.state.url);
    } else {
      let progressBarShow = setTimeout(() => {
        this.setState({ changed: true });
      }, 1000);
      let progressBarTimer = setTimeout(() => {
        this.handleClick(this.state.url);
      }, 11000);
      this.setState({ progressBarTimer: progressBarTimer, progressBarShow: progressBarShow });
    }
    
  }

  handleChange = (url) => {
    this.setState({ url: url})
  }


  render() {

    let size = "large";
    let { ended, changed } = this.state;
    let { options, question, video, scenario } = this.props;
    let optionsMissing = options.length==0 ? true : false

    return (
      <div>
        <Row type="flex" justify="center" align="middle" style={{ paddingTop: "50px" }}>
          {/* <div className="player-wrapper"> */}
          <ReactPlayer url={`/videos/${video}.mp4`}
            muted={this.state.muted}
            playing={this.state.playing}
            onReady={this.handleOnReady}
            onEnded={this.onEnded}
            width="1000px"
            height="500px"
            key={scenario}
            controls={true}
          />
          {/* </div> */}
        </Row>



        {ended && !optionsMissing &&


          <div key={`div${this.state.url}`}>
            <div className="container">
              {changed && <input type="radio" className="radio" name="progress" value="zero" id="zero" key="zero" defaultChecked={changed} />}

              {!changed && <input type="radio" className="radio" name="progress" value="onehundred" id="onehundred" key="hundred" defaultChecked={!changed} />}

              <div className="progressleft">
                <div className="progress-bar"></div>
              </div>
              <div className="progressright">
                <div className="progress-bar"></div>
              </div>
            </div>
            <Container>
              {options.map((option, index) => {

                if (options.length == 1){
                  return (
                    <div style={{justifySelf: "end"}}>
                      <input defaultChecked type="radio" name="choice" id={index} key={option.url} onChange={this.handleChange.bind(this, option.url)}/>
                      <Option htmlFor={index} key={index} >
                        {option.text}
                      </Option>
                    </div>
                  )
                }
                
                if (index == 0) {
                  return (
                    <div style={{justifySelf: "center"}}>
                      <input defaultChecked type="radio" name="choice" id={index} key={option.url} onChange={this.handleChange.bind(this, option.url)}/>
                      <Option htmlFor={index} key={index} >
                        {option.text}
                      </Option>
                    </div>
                  )
                } else {
                  return (
                    <div style={{justifySelf: "center"}}>
                      <input type="radio" name="choice" id={index} key={option.url} onChange={this.handleChange.bind(this, option.url)}/>
                      <Option htmlFor={index} key={index} >
                        {option.text}
                      </Option>
                    </div>
                  )
                }

              })}
            </Container>
          </div>}

      </div>
    );
  }
}

