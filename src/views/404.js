import React from 'react'
import { WingBlank, Button } from 'antd-mobile'

const Index = ({ history }) => {
  return (
    <React.Fragment>
      <div style={{
        lineHeight: '200px',
        fontSize: '40px',
        textAlign: 'center',
        color: '#ddd'
        }}>404 Not Found.</div>

      <WingBlank>
        <Button onClick={ () => history.push('/') }>go to log in.</Button>
      </WingBlank>
    </React.Fragment>
  )
}

export default Index
