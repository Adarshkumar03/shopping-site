import {Link} from "react-router-dom";

const Main = () => {
    return (
      <section className="main-header">
        <div>
            <img src="https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1603754094/photosp/7b325c2c-f331-4842-a2f9-6c64198ccb27/7b325c2c-f331-4842-a2f9-6c64198ccb27.jpg" alt="clothing-accesories"/>
        </div>
        <div className="main-content">
          <h1>Slip In, Stand Out</h1>
          <p>We have unique design for the unique you.</p>
          <button><Link to="/shop">Shop Now</Link></button>
        </div>
      </section>
    );
  };
  
  export default Main;