import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from '../navbar';
import "../../CSS/styles.css"
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', redirect: '', error: undefined };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/company/login', {
        email: this.state.email,
        password: this.state.password
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("userId", res.data._id);
          sessionStorage.setItem("name", res.data.name);
          
          this.setState({ redirect: <Redirect to='/company/viewjob'/> });  
        } else {
            console.log(res);
          this.setState({ error : "Invalid Credentials" });
        }
        
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.redirect}
        <Navbar/>
        <div class="display_inline" style={{height: '-webkit-fill-available'}}>
        <div class="col-md-6 coloring" style={{background:'#1569e0' }}>
        <div style={{marginTop:'5%'}}>
          <h1>Get the job done</h1>
          <p><strong>Employers</strong></p>
          <p>Hire the next generation of talent.</p>
          <p><strong>Career Centers</strong></p>
          <p>Bring the best jobs to your students.</p>
        </div>
        </div>
        <div class="col-md-6"style={{  margin: 'auto'}}>
          <h1>Employer Sign In</h1>
          <form className='ui form' onSubmit={this.onSubmitHandler}>
            <div className='field'>
              <label>Email</label>
              <input
                type='text'
                name='email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div className='field'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div style={{marginBottom: '10px'}}>    
              {this.state.error && <div className='ui red message'>{this.state.error}</div>}
            </div>
            <button className='ui button' type='submit'>
              Sign In
            </button>
          </form>
          <Link to="/company/signUp" className="item">
         Not a user Register now
        </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;