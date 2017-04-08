import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home.js'
import About from './pages/About.js'
import Expense from './pages/Expense.js'
import Income from './pages/Income.js'
import Stats from './pages/Stats.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
		this.state = {
			isLoggedIn: (localStorage.getItem('token') ? true : false),
			username: (localStorage.getItem('username') ? localStorage.getItem('username') : false),
			loginError: null,
		}
	}

  render() {
    return (
      <Router>
      	<div>
	      	<nav className="navbar navbar-default">
					  <div className="container">
					    
					    <div className="navbar-header">
					      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					      </button>
					      <Link to="/" className="navbar-brand">بستون</Link>
					    </div>

					    
					    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					    	<ul className="nav navbar-nav navbar-left">
					    		<li><Link to="/about">درباره ی برنامه</Link></li>
					    	</ul>
				      	{this.state.isLoggedIn ? (
					      	<ul className="nav navbar-nav navbar-left">
			        			<li><Link to='/'>{this.state.username} عزیز خوش آمدید</Link></li>
			        			<li><Link to='/stats'>مدیریت</Link></li>
			        		</ul>
			        	) : (
			        		<ul className="nav navbar-nav navbar-left">
			        			<li className="dropdown">
						          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>ورود</b> <span className="caret"></span></a>
											<ul id="login-dp" className="dropdown-menu">
												<li>
													 <div className="row">
															<div className="col-md-12">
																 <form className="form" role="form" method="post" id="login-nav" onSubmit={this.handleLogin}>
																		<div className="form-group">
																			 <label className="sr-only">نام کاربری</label>
																			 <input ref={(input) => { this.username = input; }} type="text" className="form-control" placeholder="نام کاربری" required />
																		</div>
																		<div className="form-group">
																			 <label className="sr-only">گذرواژه</label>
																			 <input ref={(input) => { this.password = input; }} type="password" className="form-control" placeholder="گذر واژه" required />
                                       <div className="help-block text-right"><a href="">Forget the password ?</a></div>
																		</div>
																		<div className="form-group">
																			 <button type="submit" className="btn btn-primary btn-block">ورود</button>
																		</div>
																		{this.state.loginError !== null ?  <div className='alert alert-danger'>{this.state.loginError}</div> : <div></div>}
																 </form>
															</div>
															<div className="bottom text-center">
																برا ثبت نام به <a href="http://bestoon.ir">bestoon.ir</a> مراجعه کنید.
															</div>
													 </div>
												</li>
											</ul>
						        </li>
			        		</ul>
			        	)}
					       
					    </div>
					  </div>
					</nav>
			    <div className="container">
			      <Route exact path="/" component={Home}/>
			      <Route path="/about" component={About}/>
			      <Route path="/expense" component={Expense}/>
						<Route path="/income" component={Income}/>
						<Route path="/stats" component={Stats}/>
			    </div>
		    </div>
		  </Router>
    );
  }

  handleLogin(e) {
  	e.preventDefault();

  	var username = this.username.value
  	var password = this.password.value

  	axios.post('http://bestoon.ir/accounts/login', 'username=' + username + '&password=' + password)
  		.then((res) => {
        if(res.data['result'] === 'ok') {
        	localStorage.setItem('token', res.data['token']);
        	localStorage.setItem('username', username);
        	this.setState({
        		isLoggedIn: true,
        		username: username
        	})
        } else {
        	this.setState({
        		loginError: 'نام کاربری یا رمز عبور اشتباه است.'
        	})
        }
      }).catch((e) => {
      	this.setState({
      		loginError: 'نام کاربری یا رمز عبور اشتباه است.'
      	})
      });
  }
}

export default App;
