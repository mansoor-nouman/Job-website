import React from "react";
import { useState, useEffect} from "react";
import { jobDetails } from "./api";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Candidate(p) {
    let [userData, setuserData] = useState([]);
    let [jobosition, setjobPosition] = useState([]);
    let history = useHistory();
    async function getData(){
        let users = await jobDetails();
        setuserData(users.data)
    }
    useEffect(() => {
        getData();
    },[userData.length])
    let data = {jobosition, }
    const myLogout = () =>{ 
        history.push(`/`);
      }
      const myApplied = async() =>{ 
          await axios.post(`http://localhost:5000/Applied`,data)
        history.push(`/`);
      }

    return (
        <>
        <h1>Candidate Homepage <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={myLogout}>Logout</button></span></h1>
        <div>
                    {
                       userData.map((user, index) => {
                           return (
                           <>   
                            <div class="card" style={{width: '25rem', border: '2px solid red'}}>
                            <div class="card-body">
                            <h5 class="card-title">{user.jobPosition}</h5>
                            <p class="card-text">{user.description}</p>
                            <div class="text-right">
                            <button type="button" class="btn btn-primary" onClick ={(e) => {
                            e.preventDefault();
                            setjobPosition(user.jobPosition);
                            myApplied();
                            }}>Apply for this job</button></div>
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

export default Candidate;