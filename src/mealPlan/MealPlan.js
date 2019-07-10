import React, { Component } from 'react';
import UserNav from '../UserNav';
import '../mealPlan/MealPlan.css';
class MealPlan extends Component {
	render() {
		return (
			<div className="main">
				<UserNav />
				<body className="white">
					<div className="daysContainerTitleContainer">
						<h3 className="daysContainerTitle">Your Meal Plan</h3>
					</div>
					<div className="daysContainer">
						<div className="dayStart">
							<h4>Sunday</h4>
						</div>
						<div className="day">
							<h4>Monday</h4>
						</div>
						<div className="day">
							<h4>Tuesday</h4>
						</div>
						<div className="day">
							<h4>Wednesday</h4>
						</div>
						<div className="day">
							<h4>Thursday</h4>
						</div>
						<div className="day">
							<h4>Friday</h4>
						</div>
						<div className="dayEnd">
							<h4>Saturday</h4>
						</div>
					</div>
				</body>
			</div>
		);
	}
}

export default MealPlan;
