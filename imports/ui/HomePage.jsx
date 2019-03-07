import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col, Carousel } from 'antd';
import ReactPlayer from 'react-player'

const ButtonGroup = Button.Group;


export default class HomePage extends Component {




  render() {

    return (
      <div style={{ background: "white", height: '100vh' }}>
        <Row gutter={12}></Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={15} value={200}>
            <Carousel autoplay>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
      </div>



    );
  }
}

