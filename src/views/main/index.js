import React from 'react'
import { TabBar } from 'antd-mobile'

import Home from '../index'
import Course from '../course'
import NotFound from '../404'
import User from '../user'

import { connect } from 'react-redux'

class TabBarExample extends React.Component {
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
          <TabBar.Item
            title="Home"
            key="Home"
            icon={ <i className="m3 m3-icon-home" /> }
            selectedIcon={ <i className="m3 m3-icon-homefill" /> }
            selected={ this.props.tab === 'Home' }
            onPress={() => this.props.selectedTab('Home') }>
            <Home></Home>
          </TabBar.Item>

          <TabBar.Item
            title="Course"
            key="Course"
            icon={ <i className="m3 m3-icon-video" /> }
            selectedIcon={ <i className="m3 m3-icon-videofill" /> }
            selected={ this.props.tab === 'Course' }
            onPress={() => this.props.selectedTab('Course') }>
            <Course></Course>
          </TabBar.Item>

          <TabBar.Item
            title="NotFound"
            key="NotFound"
            icon={ <i className="m3 m3-icon-noview" /> }
            selectedIcon={ <i className="m3 m3-icon-noviewfill" /> }
            selected={ this.props.tab === 'NotFound' }
            onPress={() => this.props.selectedTab('NotFound') }>
            <NotFound history={ this.props.history }></NotFound>
          </TabBar.Item>

          <TabBar.Item
            icon={ <i className="m3 m3-icon-my" /> }
            selectedIcon={ <i className="m3 m3-icon-myfill" /> }
            title="My"
            key="My"
            selected={ this.props.tab === 'My' }
            onPress={() => this.props.selectedTab('My') }>
            <User></User>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tab: state.main.tab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedTab: tab => {
      dispatch({ type: 'SELECTED_TAB', tab })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBarExample)
