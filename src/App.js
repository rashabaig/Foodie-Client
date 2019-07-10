import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import MyRecipes from '../src/myRecipes/MyRecipes';
import GroceryList from '../src/groceryList/GroceryList';
import MealPlan from '../src/mealPlan/MealPlan';
import Account from '../src/account/Account';
import LogIn from '../src/logIn/LogIn';
import SignUp from '../src/signUp/SignUp';
import Home from '../src/home/Home';
import ViewRecipe from '../src/home/Home';
class App extends Component {
	constructor() {
		super();
		this.state = {
			userRecipes: [],
			userID: '5d03c73ba5c54e0017170214'
		};
	}

	componentDidMount() {
		axios
			.get('https://foodie---app.herokuapp.com/api/foodie/recipes/all/5d03c73ba5c54e0017170214')
			.then((userRecipes) => {
				console.log(userRecipes);
				this.setState({ userRecipes: userRecipes.data });
			});
	}

	render() {
		return (
			<div>
				<Route exact path="/" render={(routerProps) => <Home {...routerProps} />} userID={this.state.userID} />
				<Route
					exact
					path="/myrecipes"
					render={(routerProps) => (
						<MyRecipes {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/grocerylist"
					render={(routerProps) => (
						<GroceryList {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/mealplan"
					render={(routerProps) => (
						<MealPlan {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/account"
					render={(routerProps) => (
						<Account {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/login"
					render={(routerProps) => (
						<LogIn {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/signup"
					render={(routerProps) => (
						<SignUp {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				<Route
					exact
					path="/browse/:recipeName"
					render={(routerProps) => (
						<ViewRecipe {...routerProps} userID={this.state.userID} recipesData={this.state.recipesData} />
					)}
				/>
				{/* <Route exact path="/newRecipe" render={(routerProps) => <NewRecipe {...routerProps} />} /> */}
			</div>
		);
	}
}

export default App;
