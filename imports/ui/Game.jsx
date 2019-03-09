import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';

const ButtonGroup = Button.Group;


export default class Game extends Component {

  

  render() {

    return (
      <div style={{ background: "white", height: '100vh' }}>

        <Button className="jumping-button" href='/game/s1' style={{margin: '0 auto'}}>Let's play</Button>

      </div>



    );
  }
}

