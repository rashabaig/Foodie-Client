import React, { Component } from 'react';
import axios from 'axios';

class NewRecipe extends Component {
	constructor() {
		super();
		this.state = {
			recipeName: '',
			prepTime: '',
			cookTime: '',
			servings: '',
			image: ''
		};
		console.log(this.state.recipeName);
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(evt) {
		let target = evt.target;
		let value = target.value;
		let name = target.name;
		this.setState({ [name]: value });
	}

	handleSubmit() {
		const URL = `http://localhost:3001/api/foodie/recipes/newRecipe/5d02ee248669adac92ca7908`;
		console.log(URL);
		axios
			.put(URL, {
				recipeName: this.state.recipeName,
				prepTime: this.state.prepTime,
				cookTime: this.state.cookTime,
				servings: this.state.servings,
				image: this.state.image
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	render() {
		return (
			<div>
				<div className="form">
					<form>
						<h3 className="formTitle">Add a new recipe</h3>
						<input
							type="text"
							placeholder=" recipe name"
							className="signInFirstNameField"
							name="recipeName"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder=" preparation time"
							className="signInFirstNameField"
							name="prepTime"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder=" cook time"
							className="signInFirstNameField"
							name="cookTime"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder="number of servings"
							className="signInFirstNameField"
							name="servings"
							onChange={this.handleInput}
						/>
						<input
							type="text"
							placeholder="image url"
							className="signInFirstNameField"
							name="image"
							onChange={this.handleInput}
						/>
						<input className="button" type="submit" value="Submit" onClick={this.handleSubmit} />
					</form>
				</div>
			</div>
		);
	}
}

export default NewRecipe;
