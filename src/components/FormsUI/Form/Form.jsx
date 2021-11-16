import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextfieldWrapper from '../Textfield/Textfield'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { lightBlue } from '@mui/material/colors';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux'
import { changeShowSignUpFlag, changeSignInFlag } from '../../../store/actions/actions';
import CREDENTIAL from '../../../ constants/constants';

const useStyles = makeStyles({
	box: {
        padding: '20px',
        border: '2px solid',
        borderColor: lightBlue[800],
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
	},
    link: {
        color: lightBlue[800],
    },
    title: {
        color: lightBlue[800],
        textTransform: 'uppercase',
    },
    icon: {
        fontSize: 50,
        color: lightBlue[900]
    }
});

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
		.min(7, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const SIGN_UP_VALIDATION = SIGN_IN_VALIDATION.concat(
    Yup.object({
        email: Yup.string()
		    .email('Invalid email')
		    .required('Required'),
     })
)

function CustomForm() {
    const classes = useStyles();

    const dispatcher = useDispatch();
    const showSignUp = useSelector((state) => state.formData.showSignUp);
    const isSignIn = useSelector((state) => state.formData.isSignIn);

    const changeForm = () => {
		dispatcher(changeShowSignUpFlag(!showSignUp));
	}

    const handleOnSubmit = ({ userName, password, email}) => {
        if(showSignUp) {
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);
            localStorage.setItem('email', email);
            return;
        }
        if(userName === CREDENTIAL.userName && password ===CREDENTIAL.password) {
            dispatcher(changeSignInFlag(!isSignIn));
            alert('you are logged in');
        }
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 10 }}>
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={ showSignUp ? SIGN_UP_VALIDATION :  SIGN_IN_VALIDATION}
                onSubmit={values => handleOnSubmit(values)}
            >
                <Form>
                    <Box className={classes.box}>
                        <AccountCircleIcon 
                            sx={{
                                fontSize: 50,
                                color: lightBlue[900]
                            }}>
                        </AccountCircleIcon>
                        <Typography variant="h5" className={classes.title} sx={{ mb: 3 }}>
                            {showSignUp ? 'Sing up' : 'Sing in'}
                        </Typography>
                        <TextfieldWrapper name="userName" label="User Name" />
                        <TextfieldWrapper name="password" label="Password" type="password" />
                        {showSignUp &&  <TextfieldWrapper name="email" label="Email"/>}
                        <Button>Submit</Button>
                        <Link
                            onClick={changeForm} 
                            href='#' 
                            variant='subtitle2' 
                            className={classes.link}
                        >
                            {showSignUp ? 'Already have an account? Sign in' : 'Create an Acount'}
                        </Link>
                    </Box>
                </Form>
            </Formik>
        </Container>
    )
}

export default CustomForm;