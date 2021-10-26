import { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
    const inventory = [{
        id:1,
        name:"Mens Ankle Length Jeans",
        price:10,
        imgUrl:"https://5.imimg.com/data5/AL/RS/MY-2325220/men-ankle-length-jeans-500x500.jpg",
        number:1
      },{
        id:2,
        name:"Double Breasted Overcoat",
        price:10,
        imgUrl:"https://img.joomcdn.net/e7f05c74e2499bc10cfdc8d32555feb760e578c7_original.jpeg",
        number:1
      },{
        id:3,
        name:"Cardigan For Women",
        price:10,
        imgUrl:"https://looksgud.com/blog/wp-content/uploads/2019/07/roadster-cardigan.jpg",
        number:1
      },{
        id:4,
        name:"T-Shirt For Men",
        price:10,
        imgUrl:"https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg",
        number:1
      },{
        id:5,
        name:"Green Shirt For Men",
        price:10,
        imgUrl:"https://assets.ajio.com/medias/sys_master/root/20210420/R70k/607ecc5baeb269a9e3972075/dennislingo_premium_attire_green_full_sleeves_slim_fit_shirt.jpg",
        number:1
      },{
        id:6,
        name:"Hoodies for Men",
        price:10,
        imgUrl:"https://4.imimg.com/data4/RQ/WI/MY-2366923/hoddies-500x500.jpg",
        number:1
      },{
        id:7,
        name:"Navy Blue Short Kurta",
        price:10,
        imgUrl:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/j/0/j0074v.jpg?rnd=20200526195200",
        number:1
      },{
        id:8,
        name:"Olive Green Long Kurta",
        price:10,
        imgUrl:"https://tjori.gumlet.com/prod-images/TJ-MW-10-06_1.jpg",
        number:1
      },{
        id:9,
        name:"Military Cargo Pants",
        price:10,
        imgUrl:"https://5.imimg.com/data5/GA/IN/MY-2073259/direct-men-27s-military-cargo-pants-cotton-straight-fit-casual-tatical-trousers-plus-size-6-pockets-500x500.jpeg",
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