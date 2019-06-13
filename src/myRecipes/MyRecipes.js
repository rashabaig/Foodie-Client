import React, { Component } from 'react';
import UserNav from '../UserNav';
import NewRecipe from '../newRecipe/NewRecipe';
import '../myRecipes/MyRecipes.css';
import axios from 'axios';

class MyRecipes extends Component {
	constructor() {
		super();
		this.state = {
			userRecipes: [],
			selectRecipe: ''
		};
	}

	componentDidMount() {
		console.log('ViewAllNotes: componentDidMount');
		axios.get(`'http://localhost:3001/api/foodie/recipes/all/${this.props.userID}`).then((userRecipes) => {
			console.log(userRecipes);
			this.setState({ userRecipes: userRecipes.data });
		});
	}

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
