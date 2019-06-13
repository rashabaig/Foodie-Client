import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../src/Foodie-Logo.png';
import './App.css';
import MyRecipes from '../src/myRecipes/MyRecipes';
import GroceryList from '../src/groceryList/GroceryList';
import MealPlan from '../src/mealPlan/MealPlan';
import Account from '../src/account/Account';
import LogIn from '../src/logIn/LogIn';
import SignUp from '../src/signUp/SignUp';
import Home from '../src/home/Home';
import ViewRecipe from '../src/home/Home';
// import NewRecipe from '../src/newRecipe/NewRecipe';
// const URL = `http://localhost:3001/api/foodie/recipes/all`;
class App extends Component {
	constructor() {
		super();
		this.state = {
			userRecipes: [],
			userID: '5cfea2319dd48c7608819202'
		};
	}

	componentDidMount() {
		console.log('ViewAllMedications: componentDidMount');
		axios.get('http://localhost:3001/api/foodie/recipes/all/5cfea2319dd48c7608819202').then((userRecipes) => {
			console.log(userRecipes);
			this.setState({ userRecipes: userRecipes.data });
		});
	}

	updateAllData = () => {
		axios.get(URL).then((recipes) => {
			console.log(recipes);
			this.setState({ recipesData: recipes.data });
		});
	};

	componentDidMount() {
		this.updateAllData();
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
