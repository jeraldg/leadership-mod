import React, { Component } from 'react';
import { Card, Button, Progress, Row, Col } from 'antd';


export default class Test extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { path } = FlowRouter.current();

    if (path.includes('case')) {
      this.setState({ current: 'case studies' });
    } else {
      this.setState({ current: 'game' });
    }
  }
  
  handleClick(e) {
    this.setState({ current: e });

    switch (e) {
      case 'game':
        FlowRouter.go('/');
        break;
      default:
        FlowRouter.go('/pre-game');
        break;
    }

  }
  

  render() {

    let {nav} = this.props;

    return (
      <div>
        <div id="btn">
          <div id='top'></div>
          <div id='middle'></div>
          <div id='bottom'></div>
        </div>
        <div id="box">
          <div id="items">
            {nav.map((navOption, index) => <div className="item" key={`nav${index}`} onClick={this.handleClick.bind(this, navOption)}>{navOption}</div>)}
          </div>
        </div>
      </div>

    )

  }

}