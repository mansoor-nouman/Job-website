import axios from "axios";

export function Postregister(data)
{
    return axios.post("http://localhost:5000/Recruitersignup",data)
}

export function Postlogin(data)
{
    return axios.post(`http://localhost:5000/RecruiterLogin`,data)
}

export function Candidateregister(data)
{
    return axios.post("http://localhost:5000/Candidatesignup",data)
}

export function Candidatelogin(data)
{
    return axios.post(`http://localhost:5000/Candidatelogin`,data)
}

export function Addjob(data)
{
    return axios.post(`http://localhost:5000/Addjob`,data)
}

export function jobDetails()
{
    return axios.get(`http://localhost:5000/jobdetails`);
}
