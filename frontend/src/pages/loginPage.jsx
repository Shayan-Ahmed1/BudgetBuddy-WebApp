import React from 'react';
import { Form, Link } from 'react-router-dom';

// export async function loginPageAction({ request }) {
//     const data = request.formData()
//     console.log(data);
//     return redirect('/');
// }

const LoginPage = () => {
    const pageStyle = {
        position: "fixed",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        fontFamily: 'Arial, sans-serif',
        // backgroundColor: "#0071BC",
        // background: 'linear-gradient(to bottom, #1e3c72, #2a5298)', // Blue gradient background
        // background: `url(https://img.freepik.com/free-photo/low-angle-shot-mesmerizing-starry-sky_181624-27925.jpg?w=740&t=st=1702437860~exp=1702438460~hmac=8f926ff26f98fcd3f43f8f6797fc3ec572d4e44768e24041660e5c047c67bca1)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "100%",
        color: '#fff',
        fontSize: '18px',
    };

    const formStyle = {
        marginTop: "30px",
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    };

    const labelStyle = {
        display: 'block',
        margin: '10px 0',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#3498db', // Blue button color
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const linkStyle = {
        margin: '10px',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'underline',
    };

    return (
        <div style={pageStyle}>
            <h2 style={{ color: 'white' }}>Login to your Account</h2>
            <Form style={formStyle} action="/dashboard" method="POST">
                <label style={labelStyle}>
                    Username:
                    <input type="text" name="userName" style={inputStyle} placeholder="Enter your username" required />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input type="password" name="password" style={inputStyle} placeholder="Enter your password" required />
                </label>
                <button type="submit" style={buttonStyle}>
                    Login
                </button>
            </Form>
            <p style={{ marginTop: '30px', color: '#fff' }}>
                Don't have an account? <Link to="/signup" style={linkStyle}>Sign up</Link>
            </p>
        </div>
    );
};

export default LoginPage;
