import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';

const ButtonGroup = Button.Group;


export default class Game extends Component {


  // style={{left:"5%",borderRadius:"12px", width:"15%", height:"15%" }}


  render() {

    return (
      <div style={{ background: "#000", height: '100vh' }}>

        <Row style={{ background: "#000" }} type="flex" justify="end" align="middle">

          <div style={{ display: 'flex', position: 'absolute', width: '100%' }}>
            <Button style={{ margin: 'auto', position: 'relative' }} className="glow-button start-game" href='/Intro-1' >START GAME</Button>
          </div>

          <div style={{ width: '100%', height: '100vh', minWidth: '50%', background: 'url("/images/bander_wallpaper.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right' }}>
          </div>

        </Row>

        {/* <Button className="glow-button" href='/game/s1' style={{ margin: '0 auto' }}>Start Game</Button> */}
      </div>


    );
  }
}

