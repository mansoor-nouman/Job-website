import React from "react";
import { Link } from "react-router-dom";


function Topbar()
{
    return(
        <>
        {/* <nav class="navbar navbar-expand-md navbar-dark bg-light"> */}
        <div class= "iamg"><i class="fas fa-user">JOBS</i></div>
        
            <div>
            <Link to="/RecruiterLogin">
               <button type="button" class="btn btn-primary btn-lg">For Recruiter</button> 
               </Link>
                <Link to = "/Candidatelogin">
                <button type="button" class="btn btn-primary btn-lg">For Candidate</button>
                </Link>
                </div>
        </>
    )
}
export default Topbar;