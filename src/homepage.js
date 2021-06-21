import Pizza from "./eachpizza";
import {useState} from "react";
function Homepage()
{
    let pizzas = [
        {
          name: "Mozorella cheese pizza",
          price: 450,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevnIL--EnAj2lkVCZUR9q1mzQQlL1fuF62A&usqp=CAU"
        },
        {
          name: "Pepporoni pizza",
          price: 350,
          image: "https://st.depositphotos.com/2640119/3010/i/600/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg"
        },
        {
          name: "Mushroom pizza",
          price: 320,
          image:"https://thumbs.dreamstime.com/b/tasty-mushroom-onion-pizza-closeup-high-angle-view-freshly-baked-crisp-golden-crust-garnished-fresh-basil-30654783.jpg"
        },
        {
          name: "Chicken pizza",
          price: 720,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkygIeYeCSbZNJ0Z6uzbU8HD-y0fqia_RN5g&usqp=CAU"
        },
        {
          name: "Italian pizza",
          price: 470,
          image:"https://www.acouplecooks.com/wp-content/uploads/2019/04/Italian-Pizza-004-800x1000.jpg"
        },
        {
          name: "Macaroni cheese pizza",
          price: 600,
          image:"https://www.thegunnysack.com/wp-content/uploads/2013/09/Homemade_Mac_n_Cheese_Pizza.jpg"
        }
      ];
    return <>
    <div class = "container">
       <div style = {{backgroundColor : "orange"}}>
           sdfcdsfascd
           <div className="row">
               <div class = "col-lg-3">
               <h1 class="my-4 text-white">
                   Select an order</h1>
                   </div>
                   <div className="col-lg-9">
            <div className="row MarPad10">
            {pizzas.map((product, index) => {
            return <Pizza key={index} data={product} ></Pizza>;
          })
          }
        </div>
      </div>
               
           </div>
        </div> 
        </div>
    </>
}
export default Homepage;