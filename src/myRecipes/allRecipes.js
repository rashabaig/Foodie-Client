import React, { Component } from 'react';

class allRecipes extends Component {
	render() {
		let allRecipes = this.props.userRecipes.map((recipe, i) => {
			return (
				<div>
					<img src={recipe.image} />
					<h4>{recipe.recipeName}</h4>
				</div>
			);
		});
		return (
			<div>
				<div>{allRecipes}</div>
			</div>
		);
	}
}

export default allRecipes;
