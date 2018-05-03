// Dependencias
import React, { Component } from 'react';

// Componentes
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

// Assets
import './App.css';

// Componente principal
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<MovieList />
				<Footer/>
			</div>
		);
	}
}

export default App;
