import React from "react"
import {useState} from "react"
import axios from "axios"

export default function Forgot()
{
    let [userEmail, setUseremail] = useState("")
    let handleSubmit = e => {
        
            let data = {userEmail}
            console.log({
              userEmail
            })
            let data1 = { email : this.userEmail}
             axios.post("http://localhost:5000/forgot",data).then(
                res => {
                    console.log(res);
                }
            ).catch (
                err => {
                    console.log(err);
                }
            )
            
    };
    return <>
        <div class="wrapper fadeInDown">
  <div id="formContent">
    <form onSubmit ={(e) => {
    e.preventDefault();
    handleSubmit()
  } }>

      <h2>Forgot Password</h2>
      <input type="text" id="email" class="fadeIn second" name="login" 
      onChange = {(e) => setUseremail(e.target.value)} placeholder="email"/>
      <input type="submit" class="fadeIn fourth" value="Submit"/>
  </form>
</div>
    </div>
    </>
}