import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';

const ButtonGroup = Button.Group;


export default class Game extends Component {



  render() {

    return (
      <div style={{ background: "black", height: '100vh' }}>

        <Row style={{ background: "black", height: '350px' }} type="flex" justify="end" align="middle">

          <Button className="glow-button start-game" href='/game/s1' style={{left:"5%",borderRadius:"12px", width:"15%", height:"15%" }}>START GAME</Button>

          <div style={{ width: '40%', height: '100vh' }}>
            <img src="/images/bandersnatch_poster.jpg" alt="Poster" height="100%" width="100%"></img>
          </div>

        </Row>

        {/* <Button className="glow-button" href='/game/s1' style={{ margin: '0 auto' }}>Start Game</Button> */}
      </div>


    );
  }
}

