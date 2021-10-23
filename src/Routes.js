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

      const addItemToCart = (item) => {
        let index = cart.findIndex(cartItem=>cartItem.id===item.id);
        if(index>-1){
        let newCart = cart.slice();
        newCart[index].number++;
        setCart([...newCart]);
        }
        else{
          setCart([...cart, item]);
        }
      }

      const removeItemFromCart = (item) => {
        let index = cart.findIndex(cartItem=>cartItem.id===item.id);
        if(index>-1){
            let newCart = cart.slice();
            if(newCart[index].number===1){
              newCart.splice(index,1);
            }else{
              newCart[index].number--;
            }
            setCart([...newCart]);
        }
      }
      
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=><App cart={cart} onAdd={addItemToCart} onRemove={removeItemFromCart}/>}/>
                <Route exact path="/shop" 
                component={()=><Shop cart={cart} inventory={inventory} onAdd={addItemToCart} onRemove={removeItemFromCart}/>}/>                 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;