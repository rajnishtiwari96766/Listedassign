import React from "react";
import './style.css';

function Registration(props) {
    return (
        <div className="container">

            <div className="container1">
                <div style={{
                    background: 'black',
                    color: 'White',
                    width: 500,
                    height: 726,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 36
                }}>
                    <h2>Board.</h2>
                </div>

            </div>
            <div className="container2">
                <div>
                    <div className="reg2">
                        <h2>Sign in</h2>
                        <p>Sign in into your account</p>
                    </div>

                    <div className="btn">
                        <button className="btn1"><i class="fa-brands fa-google"></i> Sign in with google</button>
                        <button className="btn2"><i class="fa-brands fa-apple"></i>           Sign in with Apple</button>
                    </div>
                </div>
                <div className='reg1'>
                    <p>Enter email id:</p>
                    <input type={"text"}></input>

                    <p>Password</p>
                    <input type={"text"}></input>

                    <p className="link">Forgot Password?</p>
                    <button className="btn3">Sign In</button>
                </div>

                <span>Don't have an account?</span>
                &nbsp;
                <span className="link">Register here</span>
            </div>
        </div>
    )
}
export default Registration;