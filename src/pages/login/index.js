import React from 'react'
import { WingBlank, List, InputItem, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom';
import './style.less'
// import login_bg from '../../images/login_bj.jpg'

class login extends React.Component {
  constructor() {
    super()
    this.state = {
      routerHome: false
    }
    // const body = document.getElementsByTagName("body")
    // body[0].style.backgroundImage = `url('${login_bg}')`
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val,
      routerHome: true
    })
    console.log(this.state)
  }
  /**
   * @name 登陆提交
   */
  handleLogin = () => {
    console.log(this.state)
  }

  /**
   * @name 跳转到登陆
   */
  register = (e) => {
    e.preventDefault()
    this.props.history.push('/register')
  }
  render() {
    return (
      <WingBlank size="lg" className="login">
        { this.state.routerHome ? <Redirect to='/home' /> : null }
        <div className="logo">搜包裹</div>

        <List>
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            onChange={v => this.handleChange('user', v)}
          ></InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={v => this.handleChange('pwd', v)}
            ></InputItem>
        </List>
        
          <div className="forget">
            <span>忘记密码？</span>
          </div>
        <Button type="primary" onClick={this.handleLogin}>登录</Button>
        <div className="footer">
          <div className="or">
            <span>OR</span>
          </div>
          <div className="words">
            <div className="left">
              <input type="checkbox" defaultChecked={true} />
              <span>我已认真阅读并同意<b>用户协议</b></span>
            </div>
            <div className="right">
              <a href="/" onClick={(e) => this.register(e)}>注册账号</a>
            </div>
          </div>
        </div>
      </WingBlank>
    )
  }
}

export default login