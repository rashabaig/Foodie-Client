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

const URL = 'http://localhost:3001/api/recipes/all';
class App extends Component {
	constructor() {
		super();
		this.state = {
			recipeData: []
		};
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
				<Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
				<Route exact path="/myrecipes" render={(routerProps) => <MyRecipes {...routerProps} />} />
				<Route exact path="/grocerylist" render={(routerProps) => <GroceryList {...routerProps} />} />
				<Route exact path="/mealplan" render={(routerProps) => <MealPlan {...routerProps} />} />
				<Route exact path="/account" render={(routerProps) => <Account {...routerProps} />} />
				<Route exact path="/login" render={(routerProps) => <LogIn {...routerProps} />} />
				<Route exact path="/signup" render={(routerProps) => <SignUp {...routerProps} />} />
			</div>
		);
	}
}

export default App;
