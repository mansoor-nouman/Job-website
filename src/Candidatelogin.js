import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Candidatelogin} from "./api";
function Login() {

    let [email, setEmail] = useState("");
    let [userPassword, setPassword] = useState("");
    let history = useHistory();
    let userData = { email, userPassword }

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>Login</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                               let logindata = await Candidatelogin(userData);
                               console.log(logindata);
                               window.localStorage.setItem("app_token",logindata.data.token)
                               console.log(window.localStorage.app_token)
                               let token=logindata.data.token;
                               console.log(token);
                            if(token)
                            {
                                history.push(`/candidatedashboard/${email}`);
                            }
                            else{
                                  history.push(`/login`);
                            }
                                setEmail("");
                                setPassword("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={userPassword} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="login" class="btn float-right btn-danger" />
                                </div>
                                <br/><br/>
                            </form>
                        </div>
                        <div class="card-footer">
                          <br/>
                            <div class="d-flex justify-content-right links">
                              
                                Don't have an account?<Link to="/CandidateSignup">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Login;