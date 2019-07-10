import React, { Component } from 'react';
import logo from '../src/Foodie-Logo.png';
import { Link } from 'react-router-dom';
import '../src/Nav.css';
class Nav extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav">
						<Link to="/">
							<img id="logo" src={logo} />
						</Link>
						<div className="alignRight2">
							<Link id="link2" to="/login">
								Log In
							</Link>
						</div>
						<div className="alignRight">
							<Link id="link2" to="/signup">
								Sign Up
							</Link>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
