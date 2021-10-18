const Card = ({ img, name, price, isButton }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      {
        price&&<p>${price}</p>
      }
      {
        isButton&&<button>Add to Cart</button>
      }
    </div>
  );
};

export default Card;
