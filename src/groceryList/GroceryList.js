import React, { Component } from 'react';
import UserNav from '../UserNav';
import '../groceryList/GroceryList.css';
class GroceryList extends Component {
	render() {
		return (
			<div>
				<UserNav />
				<div className="groceryParentContainer">
					<div className="groceryContainerTitleContainer">
						<h4 className="groceryContainerTitle">Grocery List </h4>
					</div>
					<div className="groceryContainer" />
				</div>
			</div>
		);
	}
}

export default GroceryList;
