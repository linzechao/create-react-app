import React from 'react'
import { TabBar } from 'antd-mobile'

import Home from '../index'
import Course from '../course'
import NotFound from '../404'
import User from '../user'

class TabBarExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Home'
    }
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white">
          <TabBar.Item
            title="Home"
            key="Home"
            icon={ <i className="m3 m3-icon-home" /> }
            selectedIcon={ <i className="m3 m3-icon-homefill" /> }
            selected={this.state.selectedTab === 'Home'}
            onPress={() => {
              this.setState({
                selectedTab: 'Home',
              })
            }}>
            <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="m3 m3-icon-video" /> }
            selectedIcon={ <i className="m3 m3-icon-videofill" /> }
            title="Course"
            key="Course"
            selected={this.state.selectedTab === 'Course'}
            onPress={() => {
              this.setState({
                selectedTab: 'Course',
              })
            }}>
            <Course></Course>
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="m3 m3-icon-noview" /> }
            selectedIcon={ <i className="m3 m3-icon-noviewfill" /> }
            title="NotFound"
            key="NotFound"
            selected={this.state.selectedTab === 'NotFound'}
            onPress={() => {
              this.setState({
                selectedTab: 'NotFound',
              })
            }}>
            <NotFound></NotFound>
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="m3 m3-icon-my" /> }
            selectedIcon={ <i className="m3 m3-icon-myfill" /> }
            title="My"
            key="My"
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              })
            }}>
            <User></User>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default TabBarExample
