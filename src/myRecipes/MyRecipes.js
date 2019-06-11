import React, { Component } from 'react';
import UserNav from '../UserNav';
import NewRecipe from '../newRecipe/NewRecipe';
import '../myRecipes/MyRecipes.css';
class MyRecipes extends Component {
	render() {
		return (
			<div>
				<UserNav />
				<NewRecipe />
				<div className="recipeParentContainer">
					<div className="recipeContainerTitleContainer">
						<h4 className="recipeContainerTitle">My Recipes</h4>
					</div>
					<div className="recipeContainer" />
				</div>
			</div>
		);
	}
}

export default MyRecipes;
