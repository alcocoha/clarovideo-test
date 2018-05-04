// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from './store';
import ClaroVideoAPI from "./api";

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Assets
import './App.css';

// Componente principal
class App extends Component {
	static propTypes = {
		children : PropTypes.object.isRequired
	}
	constructor() {
		super();
		this.state = {
			movies: []
		}
		ClaroVideoAPI.getMovies();
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				movies: store.getState().movies
			});
		});
	}
	render() {
		const { children } = this.props;
		return (
			<div className="App">
				<Header/>
				<div>
					{children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
