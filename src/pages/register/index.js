import React from 'react'
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {}
    // const body = document.getElementsByTagName("body")
    // body[0].style.backgroundImage = `url('${login_bg}')`
  }

  handleChange = (key, val) => {
    this.setState({
        [key]: val
    })
    console.log(this.state)
  }
  handlegetVerification = () => {
    console.log('获取验证码')
  }
  login = (e) => {
    e.preventDefault()
    this.props.history.push('/login')
  }
  render() { 
    return(
      <WingBlank size="lg" className="register">
        <div className="logo">搜包裹</div>
        <List>
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            onChange={v => this.handleChange('user', v)}
          ></InputItem>
          <InputItem
            placeholder="请输入验证码"
            maxLength={5}
            extra={<span className="getverification">获取验证码</span>}
            onExtraClick={() => this.handlegetVerification()}
            onChange={v => this.handleChange('Ver', v)}
          ></InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={v => this.handleChange('pwd', v)}
          ></InputItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <Button type="primary">注册</Button>
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
              <a href="/" onClick={(e) => this.login(e)}>登陆账号</a>
            </div>
          </div>
        </div>
      </WingBlank>
    )
  }
}


export default Register