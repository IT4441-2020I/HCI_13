import React from "react";
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      name: '',
      password: ''
    };
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  signIn(e) {
        let username = this.state.name
        localStorage.setItem("username", username)
        this.props.history.push('/')
        window.location.reload()
  }
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: '40px' }}>
          <div className="col-md-4 offset-md-4">
            <form className="form-signin">
              <h2 className="form-signin-heading">Đăng nhập</h2>
              <label for="inputname" className="sr-only">Tên đăng nhập: </label>
              <input type="text" onChange={this.handleNameChange} value={this.state.name} name="name" id="inputname" className="form-control" placeholder="User name" required autofocus />
              <label for="inputPassword" className="sr-only">Mật khẩu</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Đăng nhập</button>
              <Link to={'/create'} >
                <button className="btn btn-lg btn-primary btn-block" type="button" style={{marginTop: "10px"}}>Đăng ký</button>
              </Link>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
