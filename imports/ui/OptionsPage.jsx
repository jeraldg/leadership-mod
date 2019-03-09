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
      playing: true,
      muted: true,
    }
  }
  

  increase = () => {

    let { percent } = this.state;

    if ( percent >= 100){
      clearInterval(this.state.timerId); 
    }

    let timerId = setInterval(() => {
      this.setState((prevState) => ({ percent: prevState.percent + 1 }))
    }, 800);

    this.setState({timerId: timerId});
  }

  handleOnReady = () => {
    setTimeout(() => {
      this.setState({ muted: false });
    }, 100);
  }

  handleClick = (url) => {
    FlowRouter.go(`/game/${url}`)
  }

  onEnded = () => {
    this.setState({ ended: true })
  }


  render() {

    // console.log('hello');
    // console.log(this.state);
    let size = "large";
    let { ended } = this.state;
    let { options, question, video } = this.props;

    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <ReactPlayer url={`/videos/${video}.mp4`} muted={this.state.muted} playing={this.state.playing} onReady={this.handleOnReady} onEnded={this.onEnded} />
        </Row>
        {ended && <div>
          <Row type="flex" justify="center" align="middle" style={{padding: 20}}>
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              {this.increase}
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

