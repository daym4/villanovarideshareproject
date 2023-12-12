import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC63Ey3KOX32AaUnXYZD1jWuOPtfoFZXAA",
    authDomain: "villanovarideshareproject.firebaseapp.com",
    projectId: "villanovarideshareproject",
    storageBucket: "villanovarideshareproject.appspot.com",
    messagingSenderId: "1017365219527",
    appId: "1:1017365219527:web:61f3e7629a729d74d3d6e2"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const SignIn = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert('Sign In Successful!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Sign In</button>
            </form>
            <button onClick={onToggle}>Don't have an account? Create now!!</button>
        </div>
    );
};

const SignUp = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            alert('Sign Up successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={onToggle}>Already have an account? Click to Sign In!</button>
        </div>
    );
};

const Profile = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div>
            {isSignIn ? 
                <SignIn onToggle={() => setIsSignIn(false)} /> : 
                <SignUp onToggle={() => setIsSignIn(true)} />
            }
        </div>
    );
};

export default Profile;
