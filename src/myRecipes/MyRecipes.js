import React, { Component } from 'react';
import UserNav from '../UserNav';
import NewRecipe from '../newRecipe/NewRecipe';
import '../myRecipes/MyRecipes.css';
import axios from 'axios';

class MyRecipes extends Component {
	constructor() {
		super();
		this.state = {
			userRecipes: []
		};
	}

	componentDidMount() {
		console.log('ViewAllRecipes');
		axios
			.get('https://foodie---app.herokuapp.com/api/foodie/recipes/all/5d03c73ba5c54e0017170214')
			.then((userRecipes) => {
				console.log(userRecipes);
				this.setState({ userRecipes: userRecipes.data });
				console.log(userRecipes);
			});
	}

	render() {
		console.log('working');
		console.log(this.state.userRecipes);
		if (this.state.userRecipes) {
			let allRecipes = this.state.userRecipes.map((recipe, i) => {
				return (
					<div className="red">
						<img className="img" src={recipe.image} />
						<h4 className="recipeTag">{recipe.recipeName}</h4>
					</div>
				);
			});
			return (
				<div>
					<UserNav />
					<NewRecipe />
					<div className="recipeParentContainer">
						<div className="recipeContainerTitleContainer">
							<h4 className="recipeContainerTitle">My Recipes</h4>
						</div>
						<div className="recipeContainer">
							<div className="flex">{allRecipes}</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default MyRecipes;
