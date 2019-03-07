import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Dropdown, Row, Col, Card } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;


export default class PublicLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      collapsed: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    let { path } = FlowRouter.current();
    let { menu, cohorts } = this.props;

    switch(path) {
      default:
        this.setState({ current: 'home' })
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  handleClick(e) {
    let { key } = e;
    this.setState({ current: e.key });
    let { path } = FlowRouter.current();

    switch(path) {
      case 'home':
        FlowRouter.go('/');
      case 'game':
        FlowRouter.go('/game');
    }

  }

  createSubMenu() {
    return ['Lee Kuan Yew', 'Hilary Clinton', 'Trump']
  }

  render() {

    let subMenus = this.createSubMenu();

    return (
      <Layout className="layout">
        <Header style={{ width: '100%', background: 'white' }}>

          <Menu
            theme="light"
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
              key="sub1"
              title={<span><Icon type="rise" /><span>Case Studies</span></span>}
            >
              {subMenus.map(subMenu => <Menu.Item key={subMenu}>{subMenu}</Menu.Item>)}
            </SubMenu>

          </Menu>


        </Header>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }}>

            
          </Header> */}
          <Content style={{ background: '#f9fafb' }}>
            <div>{this.props.content}</div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Team 5 ©2019
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

