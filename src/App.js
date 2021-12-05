import './App.css';
import React from 'react';
import FilmsPage from './components/FilmsPage/FilmsPage'
import FilmDetails from './components/FilmDetails/FilmDetails'
import Form from './components/FormsUI/Form/Form';
import Header from './components/Header/Header';
import { Provider } from 'react-redux'
import store from './store/store.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FavouritesPage from './components/FavouritesPage/FavouritesPage';

import { PrivateRoute } from './routing/PrivateRoute';
import Spinner from './components/Spinner/Spinner';
import Error from './components/Error/Error';

function App() {
	return (
		<Provider store={store}>
			<Spinner />
			<Error />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/films" />} />
						<Route
							path="/films"
							element={
								<PrivateRoute>
									<Header />
									<FilmsPage />
								</PrivateRoute>
							}
						/>
						<Route
							path="/films/:id"
							element={
								<PrivateRoute>
									<Header />
									<FilmDetails />
								</PrivateRoute>
							}
						/>
						<Route
							path="/favourites"
							element={
								<PrivateRoute>
									<Header />
									<FavouritesPage />
								</PrivateRoute>
							}
						/>
					<Route path="/login" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
