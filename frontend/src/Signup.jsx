import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth'


const Signup = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigateTo("/home");
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <div>
          <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={signUp}>Sign up</button>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  )
}
export default Signup
