import React from "react"
import fetch from "../../utils/fetch_api"
import "./login.css"
import { Form, Icon, Input, Button, message } from 'antd';
class Login extends React.Component {
  state = {
      username:"",
      password:""
  }
  componentDidMount(){
    if(window.localStorage.islogin){
      this.props.history.push({
        pathname:"index"
      })
    }else{
      return
    }
  }
  login=()=>{
    if(!this.state.username){
      message.info("用户名为空，请输入")
      return
    }
    if(!this.state.password){
      message.info("密码为空，请输入")
      return
    }
    let data = {
      name:this.state.username,
      password:this.state.password
    }
    fetch("login",{
      method:"POST",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((res)=>{
      console.log(res)
      message.info(res.message)
      if(res.success){
        window.localStorage.islogin = true
        this.props.history.push({
          pathname:"index"
        })
      }else{
        return
      }

    })
  }
  handleChange=(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  handleChangePass=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  //组件化这么写
  // comreturn(){
  //   return(<div>
  //     dabsdjkabdkabskdbaskbdkasbdkbasd
  //   </div>)
  // }
  render(){
    return(<div>
      {/* {this.comreturn()} */}
      <Form className="login-form">
        <Form.Item>
          <Input
            onChange={this.handleChange}
            value={this.state.username}
            style={{width:"500px"}}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={this.handleChangePass}
            value={this.state.password}
            style={{width:"500px"}}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.login} htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>)
  }
}
export default Login