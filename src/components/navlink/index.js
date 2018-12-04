import React from 'react';
// import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'


class NavLinkBar extends React.Component {
  // static propTypes = {
  //   data: PropTypes.array.isRequired   // 强类型
  // }

  render() {
    const navList = [
      {
        path: '/home',
        text: '首页',
        icon: 'job',
        title: '用户HOME'
      },
      {
        path: '/setting',
        text: '官网设置',
        icon: 'msg',
        title: '消息列表'
      },
      {
        path: '/user',
        text: '账号设置',
        icon: 'user',
        title: '用户设置'
      }
    ]
    const { pathname } = this.props.location
    console.log(pathname)
    return (
      <TabBar>
        {navList.map(v => (
            
          <TabBar.Item
            badge={v.path === '/msg' ? this.props.unread : 0}
            key={v.path}
            title={v.text}
            icon={{ uri: require(`./img/${v.icon}.png`) }}
            selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
            selected={pathname === v.path}
            onPress={() => {
              this.props.history.push(v.path)
            }}
          >
          </TabBar.Item>
        ))}
      </TabBar>

    )
  }
}

export default withRouter(NavLinkBar)