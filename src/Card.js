const Card = ({ img, name, price, isButton, onAdd, item }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
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
