import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';

const ButtonGroup = Button.Group;


export default class Game extends Component {



  render() {

    return (

      <div>
        <Row style={{ background: "black", height: '350px'}} type="flex" justify="center" align="middle">

          <div style={{ width: '400px', height: '350px' }}>
            <img src="/images/bandersnatch_poster.jpg" alt="Poster" height="auto" width="100%"></img>
          </div>

        </Row>

        <Row style={{ background: "black"}} type="flex" justify="center" align="middle">
          <Button className="jumping-button" href='/game/s1' style={{ margin: '0 auto' }}>Let's play</Button>
        </Row>
      </div>


    );
  }
}

