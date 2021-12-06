import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextfieldWrapper from '../Textfield/Textfield'
import { changeShowSignUpFlag, login, addUserData } from '../../../store/actions/formActions';
import { setNotification } from '../../../store/actions/notificationActions';
import { formSelector } from './selector';

import { Container, Typography, Box, Link, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { lightBlue, red } from '@mui/material/colors';

import { styles } from './formStyle';

const INITIAL_FORM_STATE = {
    email: '',
    userName: '',
    password: ''
}

const SIGN_IN_VALIDATION = Yup.object().shape({
    userName: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('No password provided.')
        .min(7, 'Password is too short - should be 7 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const SIGN_UP_VALIDATION = SIGN_IN_VALIDATION.concat(
    Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    })
)

const CustomForm = () => {
    const dispatcher = useDispatch();
    const { showSignUp, loginFailed, currentUser } = useSelector(formSelector);
    const borderColor = loginFailed ? red[500] : lightBlue[800];

    const changeForm = () => {
        dispatcher(changeShowSignUpFlag(!showSignUp));
    }

    const handleOnSubmit = ({ userName, password, email }) => {
        if (showSignUp) {
            dispatcher(addUserData(userName, password, email));
            dispatcher(setNotification(`User ${userName} successfully registered!`));
            return;
        }
        dispatcher(login(userName, password));
    }

    return (
        currentUser ? <Navigate to="/films" /> : <Container maxWidth="xs" sx={styles.container}>
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={showSignUp ? SIGN_UP_VALIDATION : SIGN_IN_VALIDATION}
                onSubmit={values => handleOnSubmit(values)}
            >
                <Form>
                    <Box sx={{ ...styles.box, borderColor: borderColor }}>
                        <AccountCircleIcon sx={styles.icon}></AccountCircleIcon>
                        <Typography variant="h5" sx={styles.title}>
                            {showSignUp ? 'Sign up' : 'Sign in'}
                        </Typography>
                        <TextfieldWrapper name="userName" label="User Name" />
                        <TextfieldWrapper name="password" label="Password" type="password" />
                        {showSignUp && <TextfieldWrapper name="email" label="Email" />}
                        <Button fullWidth type='submit' variant='contained' sx={styles.button}>
                            Submit
                        </Button>
                        <Link onClick={changeForm} href='#' variant='subtitle2' sx={styles.link}>
                            {showSignUp ? 'Already have an account? Sign in' : 'Create an Acount'}
                        </Link>
                        <Typography variant='subtitle2' color='red'>
                            {loginFailed ? 'Login failed' : ''}
                        </Typography>
                    </Box>
                </Form>
            </Formik>
        </Container>
    )
}

export default CustomForm;