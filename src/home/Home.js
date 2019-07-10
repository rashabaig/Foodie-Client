import React, { Component } from 'react';
import Nav from '../Nav';
import '../home/Home.css';
import logo from '../Foodie-Logo.png';
class Home extends Component {
	render() {
		return (
			<div className="body">
				<Nav />
				<body className="body">
					<img id="homePageLogo" src={logo} />
					<h3>Never Miss A Meal!</h3>
				</body>
				<div className="circleContainer">
					<div className="circle">
						<h6>
							Plan Your <br /> Meals <br />
							<span>✔</span>
						</h6>
					</div>
					<div className="circle">
						<h6>
							Store Your <br /> Recipes <br />
							<span>✔</span>
						</h6>
					</div>
					<div className="circle">
						<h6>
							Grocery List <br />
							<span>✔</span>
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
