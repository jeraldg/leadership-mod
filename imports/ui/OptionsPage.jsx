import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'

const ButtonGroup = Button.Group;


export default class OptionsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      ended: false,
      playing: false,
      muted: true,
      timerId: '',
    }
  }


  increase = () => {

    if (this.state.percent >= 100){
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
    })
  }

  onEnded = () => {
    this.setState({ ended: true });
    this.increaseWithTime(300);
  }


  render() {

    let size = "large";
    let { ended } = this.state;
    let { options, question, video, scenario } = this.props;

    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <ReactPlayer url={`/videos/${video}.mp4`} 
          muted={this.state.muted} 
          playing={this.state.playing} 
          onReady={this.handleOnReady} 
          onEnded={this.onEnded} 
          width="1000px"
          height="500px"
          key={scenario}/>
        </Row>
        {ended && <div>
          <Row type="flex" justify="center" align="middle" style={{ padding: 20 }}>
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              <Progress percent={this.state.percent} />
            </Col>

          </Row>
          <Row type="flex" justify="space-between" align="middle">
            {options.map((option, index) => <Button size={size} key={index} onClick={this.handleClick.bind(this, option.url)}>{option.text}</Button>)}
          </Row>
        </div>}



      </div>
    );
  }
}

