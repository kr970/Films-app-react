import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import CustomForm from './components/FormsUI/Form/Form';

import * as reactRedux from 'react-redux';


const middlewares = [];
const mockStore = configureStore(middlewares);


it('Should dislay correct titles in login form', () => {
    const store = mockStore({
        formData: {
            showSignUp: false,
            loginFailed: '',
            currentUser: ''
        }
    });
    render(
        <reactRedux.Provider store={store}>
            <CustomForm />
        </reactRedux.Provider>
    );
    const heading = screen.getAllByRole('heading', {level: 5})[0];
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Sign in');
})


