import React from 'react'
import router from './index'
import { Route } from 'react-router-dom'

function renderRoute (routers) {
  console.log(routers)
  let arrRoute = []
  routers.forEach(({ path, name }) => {
    const Component = () => import(`../../views${path}`)
    arrRoute.push(<Route path={ path } name={ name } component={ Component } />)
  })
  
  return arrRoute.join('')
}

export default renderRoute(router.routers)
