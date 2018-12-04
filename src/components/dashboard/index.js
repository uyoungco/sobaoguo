import React from 'react';

import { NavBar } from 'antd-mobile'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import NavLinkBar from '../navlink'
// import Home from '../home'
import HomeSubLayout from '../../layouts/HomeSubLayout'
import MsgSubLayout from '../../layouts/MsgSubLayout'
import UserSubLayout from '../../layouts/UserSubLayout'
// import Msg from '../msg'
// import User from '../user'



class Dashboard extends React.Component {

  render() {
    // const navList = [
    //   {
    //     path: '/home',
    //     text: 'home',
    //     icon: 'job',
    //     title: '用户HOME',
    //     component: HomeSubLayout,
    //   },
    //   {
    //     path: '/banner',
    //     text: '消息',
    //     icon: 'msg',
    //     title: '消息列表',
    //     component: Msg
    //   },
    //   {
    //     path: '/me',
    //     text: '我',
    //     icon: 'user',
    //     title: '用户设置',
    //     component: User
    //   }
    // ]
    const {pathname} = this.props.location
    // const page = navList.find(v=>v.path===pathname)
    // console.log('pathname', pathname)
    // console.log('page', page)
    // return page ? (
    //   <div>
    //     { page.path === '/home' ? null : <NavBar className='fixd-header' mode='dard'>{page.title}</NavBar> }
    //     <div style={{ marginTop: 10 }}>
    //       <Route key={page.path} path={page.path} component={page.component}></Route>
    //     </div>

    //     <NavLinkBar data={navList}></NavLinkBar>
    //   </div>
      
    // ) : <Redirect to='/register'></Redirect>

    return(
      <div>
        <Switch>
          <Route path='/home' component={HomeSubLayout} />
          <Route path='/home_setting' component={MsgSubLayout} />
          <Route path='/user' component={UserSubLayout} />
        </Switch>
        <NavLinkBar></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard