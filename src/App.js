// Dependencias
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { fetchData } from "./actions";

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Assets
import './App.css';

let store = configureStore();

// Componente principal
class App extends Component {
	componentWillMount() {
        store.dispatch(fetchData());
    }
	render() {
		const { children } = this.props;
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<div>
						{children}
					</div>
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
