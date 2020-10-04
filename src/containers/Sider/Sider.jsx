import React, { Component } from 'react'
import { Menu } from 'antd'
import Header from '../Header/Header';
import './Sider.scss'

class Sider extends Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={this.state.mode}
            theme={this.state.theme}
          >
            <Menu.Item key="1" >
              Navigation One
          </Menu.Item>
            <Menu.Item key="2">
              Navigation Two
          </Menu.Item>
          </Menu>
        </div>

      </>
    );
  }
}

export default Sider