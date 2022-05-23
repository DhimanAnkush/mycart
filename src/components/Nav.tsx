import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles/nav.css'

function Nav() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout")
  }

  return (
    <div className="nav">
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus">
        <h3>
          Cart:{" "}
          <span className="navCartCount">{/* total items in cart here */}</span>
          <button onClick={handleClick} className="navCartCheckout">Checkout</button>
          {/* on this button click user goes to checkout page */}
        </h3>
      </div>
    </div>
  );
}

export { Nav };
