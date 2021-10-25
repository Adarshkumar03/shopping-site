import {Link} from "react-router-dom";

const Card = ({ img, name, price, isButton, onAdd, item, cl}) => {
  return (
    <div className={cl?cl:""}>
      <img src={img} alt={name} />
      {
        isButton?<h3>{name}</h3>:<button><Link to="/shop">{name}</Link></button>
      }
      {
        price&&<p>${price}</p>
      }
      {
        isButton&&<button onClick={()=>{onAdd(item)}}>Add to Cart</button>
      }
    </div>
  );
};

export default Card;
