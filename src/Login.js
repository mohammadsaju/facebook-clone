import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './Firebase';
import './Login.css';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [ state, dispatch ] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET__USER,
                user: result.user
            });
        })
        .catch(error => {
            alert(error.massege);
        })
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = ""
                />
                
                <img 
                    className = "logo__name"
                    src = "https://lh3.googleusercontent.com/proxy/AdAoUaUH3Kw1jBQLLV_NcioNpU3-wBlu0X_ZmLVZDyiUWp7VY8iSVH6Xu6xASjIwK1cqfVyeaMa6CkRm6p5EpAGWfzwQwKHWErL5Ze2qycQ8_6YUrr4IXyqE8GxKIFaGlnG_QsAZHzsAzGFABm9RoW1gemLW058lSQjxrdqrH9zwz6lX8fCv"
                    alt = ""
                />
            </div>
            <Button onClick={signIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login;
