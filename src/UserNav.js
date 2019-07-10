import React, { Component } from 'react';
import logo from '../src/Foodie-Logo.png';
import { Link } from 'react-router-dom';
class UserNav extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav">
						<Link to="/">
							<img id="logo" src={logo} />
						</Link>
						<Link className="link" to="/myrecipes">
							My Recipes
						</Link>
						<Link className="link" to="/grocerylist">
							Grocery List
						</Link>
						<Link className="link" to="/mealplan">
							Meal Plan
						</Link>
						<Link className="linkRight" to="/account">
							Account
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default UserNav;
