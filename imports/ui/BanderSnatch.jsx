import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';
import ReactPlayer from 'react-player'
import OptionsPage from '../ui/OptionsPage';
import * as bandersnatch from '../../bandersnatch1.json'

const ButtonGroup = Button.Group;


export default class BanderSnatch extends Component {



  render() {

    let scenario = FlowRouter.getParam('scenario').toUpperCase();
    let { options, video, url } = bandersnatch.scenarios[scenario];
    if (url == undefined){
      url = options[0].url;
    }

    return (
      <div style={{ background: "black", height: '100vh' }}>

        <OptionsPage
          options={options}
          video={video}
          scenario={scenario}
          url={url}
        />

      </div>



    );
  }
}

