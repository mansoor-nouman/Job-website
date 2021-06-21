import React, {useState} from "react";
import {Link, useHistory } from "react-router-dom";
import {Postregister} from './api'


function RecruiterSignup(){
    let [userName, setuserName] = useState("");
    let [email, setuserEmail] = useState("");
    let [userPassword, setuserPassword] = useState("");

    let history = useHistory();

    let userdata = {userName, email, userPassword}
    return(
        <>
        <div class="container mt-5">
            <div class="d-flex justify-content-center h-100">
                <div class="card1">
                    <div class="card-header">
                        <h3>Register for Recruiter</h3>
                    </div>
                    <div class="card-body">
                        <form onSubmit = {async (e) => {
                            e.preventDefault();
                            await Postregister(userdata);
                            setuserName("");
                            setuserEmail("");
                            setuserPassword("");    
                            history.push(`/RecruiterLogin`);
                        }}>
                        <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={userName} onChange={(e) => {
                                        setuserName(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setuserEmail(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={userPassword} onChange={(e) => {
                                        setuserPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Register" class="btn float-center btn-warning" />
                                </div>
                        </form>
                    </div>
                    <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                             have an account?<Link to="/RecruiterLogin">Login</Link>
                            </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default RecruiterSignup;
