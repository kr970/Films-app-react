import './App.css';
import React from 'react';
import Form from './components/FormsUI/Form/Form';
import { Provider } from 'react-redux'
import store from './store/store.js';


function App() {
	return (
		<Provider store={store}>
			<Form />
		</Provider>
	);
}

export default App;
