import { useState } from "react";
import '../Styles/SignIn.css';
import { db } from "../config"; // Ensure db is correctly configured for Firebase
import { collection, addDoc } from "firebase/firestore"; // Import necessary Firestore functions

const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => { // Make the function async
        e.preventDefault();
        try {
            await addDoc(collection(db, "Signin"), {
                name,
                email,
                password,
            });
            alert("Added successfully!");

            // Clear the input fields after submission
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoogleSignIn = () => {
        // Implement your Google Sign-In logic here
        console.log("Signing in with Google...");
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSignIn} className="signin-form">
                <h2>Sign In</h2>
                
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                
                <button type="submit" className="signin-button">
                    Sign In
                </button>

                <div className="google-signin-container">
                    <button
                        type="button"
                        className="google-signin-button"
                        onClick={handleGoogleSignIn}
                    >
                        Sign in with Google
                    </button>
                </div>

                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
