import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
    const inventory = [{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      },{
        name:"Shoes",
        price:10,
        imgUrl:""
      }];
      let total=0;
      const cartArray = [];
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=><App inventory={inventory} cart={cartArray} total={total}/>}/>
                <Route exact path="/shop" component={()=><Shop inventory={inventory} cart={cartArray} total={total}/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;