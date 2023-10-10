import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name" />
            <label htmlFor="email"></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email address" id="email" name="email" />
            <label htmlFor="password"></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="New password" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}