import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Dropdown, Row, Col, Card } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;

import Test from './Test';


export default class PublicLayout extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  test = () => {
    const sidebarBox = document.querySelector('#box'),
      sidebarBtn = document.querySelector('#btn');

    sidebarBtn.addEventListener('click', event => {
      sidebarBtn.classList.toggle('active');
      sidebarBox.classList.toggle('active');
    });

    window.addEventListener('keydown', event => {

      if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
      }
    });
  }

  componentDidMount() {
    this.test();
  }

  componentWillMount() {
    let { path } = FlowRouter.current();

    if (path.includes('home')) {
      this.setState({ current: 'home' });
    } else if (path.includes('game')) {
      this.setState({ current: 'game' });
    } else {
      this.setState({ current: 'case' });
    }
  }


  handleClick(e) {
    let { key } = e;
    this.setState({ current: e.key });
    let { path } = FlowRouter.current();
    console.log(path);

    switch (key) {
      case 'home':
        FlowRouter.go('/');
        break;
      case 'game':
        FlowRouter.go('/game');
        break;
    }

  }

  createSubMenu() {
    return ['Lee Kuan Yew', 'Hilary Clinton', 'Trump']
  }

  render() {
    return (
      <Layout className="layout">
        {/* <Header style={{ width: '100%', background: 'black' }}>

          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}>
            

            <Menu.Item key="home" style={{ float: 'left' }}>
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>

            <Menu.Item key="game" style={{ float: 'left' }}>
              <Icon type="play-circle" />
              <span>Game</span>
            </Menu.Item>

            <SubMenu
              key="case"
              title={<span><Icon type="rise" /><span>Case Studies</span></span>}
            >
              {subMenus.map(subMenu => <Menu.Item key={subMenu}>{subMenu}</Menu.Item>)}
            </SubMenu>

          </Menu>


        </Header> */}
        <Layout>
          <Test nav={['Pre-Game Introduction', 'game']}></Test>
          {/* <Header style={{ background: '#fff', padding: 0 }}>

            
          </Header> */}
          <Content style={{ background: 'black' }}>
            <div>{this.props.content}</div>
          </Content>

          {/* <Footer style={{ textAlign: 'center', background:'black' }}>
            Team 5 ©2019
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

