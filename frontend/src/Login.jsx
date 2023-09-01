import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from './FirebaseConfig'
import { signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const signIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigateTo("/home");
      } catch (err) {
        console.error(err)
      }
    };

    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        navigateTo("/home");
      } catch (err) {
        console.error(err)
      }
    };

    return (
      <>
        <div>
            <button className='container' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
        <p>OR</p>
        {/* <hr /> */}
        <div>
            <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign in</button>
        </div>
        <hr />
        <div>
            <p>
            Don't have an account? <Link to="/signup">Register</Link>
            </p>
        </div>
      </>
    )
}

export default Login
