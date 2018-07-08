import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

class Index extends React.Component {
  componentDidMount () {
    if (this.props.token) {
      console.log('您已经登录')
    }
  }

  componentWillUpdate () {
    console.log(2)
  }

  render() {
    return (
      <React.Fragment>
        <Button type="primary"
          onClick={ () => this.props.login(this.props.history) }>登录</Button>
      </React.Fragment>
    )
  }
}

export default connect(
  state => {
    return {
      token: state.token
    }
  },

  dispatch => {
    return {
      login: (history) => {
        dispatch({ type: 'LOGIN', token: 'Super' })
        history.push('/main')
      }
    }
  }
)(Index)
