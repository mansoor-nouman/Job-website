import React from "react";
import { useState, useEffect } from "react";
import { Ordered } from "./api";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

library.add(faTimes,faShoppingCart);

function Addcart(p) {
  let [userData, setUserdata] = useState([]);
  useEffect(async () => {
    let users = await Ordered();
    setUserdata(...userData, users.data);
    console.log("Mounted");
  }, []);
  let [accessArr, changeVal] = useState([]);
  let [totalval, changeTotal] = useState(0);
  // let customEventMtd = (p) => {
  //   userData.push(p);
  //   changeVal([...userData]);
  //   let total = parseFloat(totalval) + parseFloat(p.price);
  //   changeTotal(total.toFixed(2));
  // };
  let removeItem = async (id) => {
     await axios.delete("http://localhost:5000/deleteorder/${id}");
  };
  return (
    <>
     <div className="container ">          
        <h1 class="my-4 text-white">
        <FontAwesomeIcon icon="shopping-cart"/>
        Orders                 
        </h1>
        <div className= "row">         
        <div class="list-group">                   
          {userData.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
              {item.name} - 
                <span style={{align : "right"}}>Rs {item.price}</span>                         
                { totalval += +item.price}
                
                <button className="badge badge-primary badge-pill btn float-right" onClick = {async () => await removeItem(item._id)}>
                      <FontAwesomeIcon icon="times"/></button>                        
              </li>
            );
          })    
        }             
          <li class="list-group-item">
          Total                     
            <div class="badge badge-danger badge-pill float-right ">
              Rs {totalval}                   
            </div>                  
          </li>                 
        </div>  
        </div>            
      
      </div>
           
    </>
  );
}
export default Addcart;

