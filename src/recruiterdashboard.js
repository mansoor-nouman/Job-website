import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect} from "react";
import { jobDetails } from "./api";

function Recruiterdashboard(p){
    let [userData, setuserData] = useState([]);
    async function getData(){
        let users = await jobDetails();
        setuserData(users.data)
    }
    useEffect(() => {
        getData();
    },[userData.length])

    let history = useHistory();
    const myFunc = () =>{ 
        history.push(`/createjob`);
      }
      const myLogout = () =>{ 
        history.push(`/`);
      }
      const myAppl = () =>{ 
        history.push(`/candidatesApplied`);
      }
    return (
        <>
        <h1>Recruiter <span style={{ display: 'flex', justifyContent: 'flex-end' }}><button onClick={myLogout}>Logout</button></span></h1>
        
        <div>
            <button onClick={myFunc}>Create a job</button> <button onClick={myAppl}>Applied Candidate</button>
                    {
                       userData.map((user, index) => {
                           return (
                           <>   
                            <div class="card" style={{width: '25rem', border: '2px solid red'}}>
                            <div class="card-body">
                            <h5 class="card-title">{user.jobPosition}</h5>
                            <p class="card-text">{user.description}ent.</p>
        
                            </div>
                            </div>
                           </>
                        )
                    })
                }
        </div>
        </>
    )
}
export default Recruiterdashboard;