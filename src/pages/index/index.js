import React from "react"
// import fetch from "../../utils/fetch_api"
import { withRouter, Route, Link } from 'react-router-dom';
import "./index.css"
import one from "../content/one/index"
import two from "../content/two/index"
import three from "../content/three/index"
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
class Index extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
    return(<Layout>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/index/one">
              <Icon type="user" />
              <span>Gay love area</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/index/two">
              <Icon type="video-camera" />
              <span>Wrestling area</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/index/three">
              <Icon type="upload" />
              <span>Philosophy area</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{margin: '24px 16px',padding: 24,background: '#fff',minHeight: 280,}}>
          <Route exact path="/index" component={one} />
          <Route path="/index/one" component={one} />
          <Route path="/index/two" component={two} />
          <Route path="/index/three" component={three} />
        </Content>
      </Layout>
    </Layout>)
  }
}
export default withRouter(Index)