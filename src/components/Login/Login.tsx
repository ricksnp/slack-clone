import "./Login.css";
import slack from "../../assets/slack.jpg";
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import {userActions} from "../../_actions/UserActions";

function Login() {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: userActions.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message);
        })

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={slack} alt=""/>
                <h1>Sign in to Revature Pro</h1>
                <p>revaturepro.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
