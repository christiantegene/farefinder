import React, {useState} from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Homepage = () => {
    const navigateTo = useNavigate();
    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('null')

    const logout = async () => {
        try {
            await signOut(auth);
            navigateTo("/login");
        } catch (err) {
            console.error(err)
        }
    };

    const goToLoginPage = () => {
        navigateTo("/login");
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        console.log("Logged in as", user.email)
        setEmail(user.email)
        setDisplayName(user.displayName)

    } else {
        // User is not signed in.
        console.log("Logged out")
        return
    }
    });

    if (email) {
        return (
            <>
                <h1>Welcome to Fare Finder, {displayName}</h1>
                <button onClick={logout}>Log out</button>
            </>
        )
    } else {
        return (
            <>
                <h1>Logged out</h1>
                <button onClick={goToLoginPage}>Back to Login Page</button>
            </>
        )
    }
}

export default Homepage
