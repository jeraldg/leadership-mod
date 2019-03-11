import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'
import OptionsPage from '../ui/OptionsPage';
import * as bandersnatch from '../../bandersnatch.json'

const ButtonGroup = Button.Group;


export default class BanderSnatch extends Component {

  

  render() {

    let scenario = FlowRouter.getParam('scenario').toUpperCase();

    return (
      <div style={{ background: "black", height: '100vh' }}>

        <OptionsPage 
          options={bandersnatch.scenarios[scenario].options}
          question={bandersnatch.scenarios[scenario].question}
          video={bandersnatch.scenarios[scenario].video}
          scenario = {scenario}
        />

      </div>



    );
  }
}

