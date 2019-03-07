import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'

const ButtonGroup = Button.Group;


export default class OptionsPage extends Component {

  state = {
    percent: 100,
    ended: true,
    playing: false,
    muted: true,
  }

  decrease = () => {

    let { percent } = this.state;

    let timerId = setInterval(() => {
      this.setState((prevState) => ({ percent: prevState.percent - 1 }))
    }, 800);

    setTimeout(() => { clearInterval(timerId); }, 80000);
  }

  handleOnReady = () => {
    setTimeout(() => {
      this.setState({ playing: true });
      this.setState({ muted: false });
      console.log('hereee');
    }, 100);
  }

  onEnded = () => {
    this.setState({ ended: true })
  }


  render() {

    let size = "large";
    let { ended } = this.state;
    let { video, options } = this.props;

    return (
      <div style={{ background: "white", height: '100vh' }}>
        <Row type="flex" justify="center" align="middle">
          <ReactPlayer url='/videos/catvines.mp4' muted={this.state.muted} playing={this.state.playing} onReady={this.handleOnReady} onEnded={this.onEnded} />
        </Row>
        {ended && <div>
          <Row type="flex" justify="center" align="middle">
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              {this.decrease()}
              <Progress percent={this.state.percent} />
            </Col>

          </Row>
          <Row type="flex" justify="center" align="middle">
            <Button size={size}>Ask Gabriel what he wants</Button>
            <Button size={size}>Ignore him and continue</Button>
          </Row>
        </div>}



      </div>
    );
  }
}

