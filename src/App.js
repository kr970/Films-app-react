import './App.css';
import React from 'react';
import FilmsPage from './components/FilmsPage/FilmsPage'
import Form from './components/FormsUI/Form/Form';
import Header from './components/Header/Header';
import { Provider } from 'react-redux'
import store from './store/store.js';
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet
} from "react-router-dom";
import FavouritesPage from './components/FavouritesPage/FavouritesPage';


function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path="/login" element={<Form />} />
					<Route path="/" element={<RouteWrapper />}>
						<Route path="" element={<FilmsPage />}/>
						<Route path="favourites" element={<FavouritesPage />}/>
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	);
}


function RouteWrapper(props) {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}


export default App;
