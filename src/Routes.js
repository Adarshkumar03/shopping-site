import { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
    const inventory = [{
        id:1,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:2,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:3,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:4,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:5,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:6,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:7,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:8,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      },{
        id:9,
        name:"Shoes",
        price:10,
        imgUrl:"",
        number:1
      }];
      const [cart, setCart] = useState([]);
      const [total, setTotal] = useState(0);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=><App cart={cart} total={total}/>}/>
                <Route exact path="/shop" 
                component={()=><Shop inventory={inventory} 
                setCart={setCart} 
                cart={cart} 
                setTotal={setTotal} 
                total={total}/>}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;