import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'

const ButtonGroup = Button.Group;


export default class BanderSnatch extends Component {

  render() {

    let size = "large";
    let { ended } = this.state;
    let { video, options } = this.props;

    return (
      <div style={{ background: "white", height: '100vh' }}>

        
      </div>



    );
  }
}

