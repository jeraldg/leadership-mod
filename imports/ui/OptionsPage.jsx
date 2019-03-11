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
      url: props.options[0].url,
    }
  }


  increase = () => {

    if (this.state.percent >= 100) {
      clearInterval(this.state.timerId);
    }

    this.setState((prevState) => ({ percent: prevState.percent + 1 }))

  }

  increaseWithTime = (seconds) => {
    let timerId = setInterval(() => {
      this.increase();
    }, seconds);

    this.setState({ timerId: timerId });
  }

  componentWillUnmount = () => {
    // use timerId from the state to clear the interval
    clearInterval(this.state.timerId);
  }

  handleOnReady = () => {
    setTimeout(() => {
      this.setState({ muted: false, playing: true });
    }, 100);
  }

  handleClick = (url) => {
    FlowRouter.go(`/game/${url}`);
    clearInterval(this.state.timerId);
    this.setState({
      percent: 0,
      ended: false,
      playing: false,
      muted: true,
      timerId: '',
      changed: false,
    })
  }

  onEnded = () => {
    console.log('came here')
    this.setState({ ended: true });
    setTimeout(() => {
      this.setState({ changed: true });
    }, 1000);
    setTimeout(() => {
      this.handleClick(this.state.url);
    }, 6000);
  }

  handleChange = (url) => {
    this.setState({ url: url})
  }


  render() {

    let size = "large";
    let { ended, changed } = this.state;
    let { options, question, video, scenario } = this.props;
    let test = options.length==1 ? "end" : "center"

    return (
      <div key="100">
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
          />
          {/* </div> */}
        </Row>



        {ended &&


          <div>
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
                      <input defaultChecked type="radio" name="choice" id={index} key={index} onChange={this.handleChange.bind(this, option.url)}/>
                      <Option htmlFor={index} key={index} >
                        {option.text}
                      </Option>
                    </div>
                  )
                }
                
                if (index == 0) {
                  return (
                    <div style={{justifySelf: "center"}}>
                      <input defaultChecked type="radio" name="choice" id={index} key={index} onChange={this.handleChange.bind(this, option.url)}/>
                      <Option htmlFor={index} key={index} >
                        {option.text}
                      </Option>
                    </div>
                  )
                } else {
                  return (
                    <div style={{justifySelf: "center"}}>
                      <input type="radio" name="choice" id={index} key={index} onChange={this.handleChange.bind(this, option.url)}/>
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

