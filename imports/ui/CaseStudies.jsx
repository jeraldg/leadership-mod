import React, { Component } from 'react';
import { Button, Row, } from 'antd';
import { Container, Option } from './Components'

export default class CaseStudies extends Component {




  render() {

    return (
      <div style={{ background: "black", padding: "5em 5em"}}>
        <Row gutter={12}></Row>
        <Row type="flex" justify="center" align="middle">
          <div style={{color:"white" ,border: "1px solid gray",padding: "8px", paddingTop: "20px", width: "50%"}}>
          <h1 style={{color:"white", fontSize: "40px", textAlign: "center"}}>About Leadersnatch</h1>
            <p style={{textDecoration: "italics", fontSize: "24px"}}>
            "Leadership is a choice, not a position" - Stephen Covey
            </p>
            <p style={{fontSize: "24px"}}>

            We make decisions every single day. Getting out of bed when the alarm sounds or snoozing for that precious 5 minutes. Actively participating in group discussions versus taking a backseat and enjoying the ride. 
            
            </p>

            <p style={{fontSize: "24px"}}>
            In this regard, Covey's quote stood out strongly to us we believe that our choices and actions define our leadership qualities, not our position or title. We find leaders from all walks of life and anyone in an organization can be a leader.
            
            Covey believes that there is indeed a formula for becoming such a leader. These four imperatives of leadership are as follows:
            </p>

            <h1 style={{color:"white", fontSize: "32px"}}>1. Inspire Trust</h1>
            <p style={{fontSize: "24px"}}>
            We build relationships of trust through both our character and competence and we also extend trust to others. We show others that we believe in their capacity to live up to certain expectations, to deliver on promises and to achieve clarity in key goals. We don't inspire trust by micromanaging and second guessing every step people make.
            </p>

            <h1 style={{color:"white", fontSize: "32px"}}>2. Clarify Purpose</h1>
            <p style={{fontSize: "24px"}}>
            Great leaders involve their people in the communication process to create the goals to be achieved. If people are involved in the process, they psychologically own it and you create a situation where people are on the same page about what is really important — mission, vision, values and goals.
            </p>

            <h1 style={{color:"white", fontSize: "32px"}}>3. Align Systems</h1>
            <p style={{fontSize: "24px"}}>
            This means not allowing conflict between what we say is important and what we measure. For example, many times organizations claim that people are important but in fact, the structures and systems including accounting, make them an expense or cost centre rather than an asset and the most significant resource.
            </p>

            <h1 style={{color:"white", fontSize: "32px"}}>4. Unleashed Talent</h1>
            <p style={{fontSize: "24px"}}>
            When we inspire trust and share a common purpose with aligned systems, we empower people. Their talent is unleashed so that their capacity, their intelligence, their creativity and their resourcefulness is utilized.
            
            These are based on principles that build upon each other rather than techniques or steps that are independent of each other.
            
            As such, we adopted Black Mirror's Bandersnatch as we wanted to show how the choices we make have an impact on those around us and how any one of us can demonstrate leadership without necessarily holding a designated leadership position. We found that one of the most common and relevant areas that this happens is in our group projects across various classes.
            </p>

            <p style={{fontSize: "24px", fontWeight: "700"}}>
            We present to you, Leadersnatch.
            </p>
            {/* 1. Inspire Trust
            - We build relationships of trust through both our character and competence and we also extend trust to others. We show others that we believe in their capacity to live up to certain expectations, to deliver on promises and to achieve clarity in key goals. We don't inspire trust by micromanaging and second guessing every step people make.
            
            2. Clarify Purpose
            - Great leaders involve their people in the communication process to create the goals to be achieved. If people are involved in the process, they psychologically own it and you create a situation where people are on the same page about what is really important — mission, vision, values and goals.
            
            3. Align Systems
            - This means not allowing conflict between what we say is important and what we measure. For example, many times organizations claim that people are important but in fact, the structures and systems including accounting, make them an expense or cost centre rather than an asset and the most significant resource.
            
            4. Unleashed Talent
            - When we inspire trust and share a common purpose with aligned systems, we empower people. Their talent is unleashed so that their capacity, their intelligence, their creativity and their resourcefulness is utilized.
            
            These are based on principles that build upon each other rather than techniques or steps that are independent of each other.
            
            As such, we adopted Black Mirror's Bandersnatch as we wanted to show how the choices we make have an impact on those around us and how any one of us can demonstrate leadership without necessarily holding a designated leadership position. We found that one of the most common and relevant areas that this happens is in our group projects across various classes.
            
            We present to you, Leadersnatch. */}
          </div>
        </Row>
      </div>



    );
  }
}

