
import { GetPizza } from "./api";
import { useState, useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom"

export default function Pizza(p) {
  let [userData, setUserdata] = useState([]);
  useEffect(async () => {
    let users = await GetPizza();
    setUserdata(...userData, users.data)
    console.log("Mounted")
   
}, [])
 let [name, setName] = useState();
 let [price, setPrice] = useState();
//  let mail = {userEmail: p.match.params.id}
 let handleSubmit = async (e) => {
  try {
    let data = {
        name, price
    }
    console.log({
      name, price
    })
     await axios.post("http://localhost:5000/ordered",data)
    alert("done")
  } catch (error) {
    alert("error")
  }
}
  return <>

    <div class = "container">
    <div className="row">
      <div class="custombtn">
      <Link to="/CustomizedPizza">Customized Pizza</Link>
      </div>
      <div class="custombtn">
        <Link to="/ordered">My Orders</Link>
      </div>
      <div className="col-lg-12">
    <div className="row MarPad10">
      {
      userData.map((user, index) => {
      return(
        <div class="col-lg-4 col-md-6 mb-4 my-4">
        <div class="card h-100">
        <a href="#">
        <img class="card-img-top" src={user.image} alt="" height = "250" width = "700" />
      </a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{user.name}</a>
        </h4>
        <h5>Rs {user.price}</h5> 
      </div>
      <div class="card-footer">
        <button class="btn btn-success float-right" id={index}
        onClick ={(e) => {
           e.preventDefault();
           setName(user.name);
          setPrice(user.price);
          handleSubmit();
        }}>
        Add to cart
        </button>
        </div>
      </div>
      </div>
      )
    })}

</div>
  </div>
  </div>
  </div>
  </>
}