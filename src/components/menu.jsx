import CartIcon from "../assets/cart.svg";
import { useSelector } from "react-redux";
import { selectTotal } from "../store/cart.slice";

export const Menu = () => {
  const totalCartProducts = useSelector(selectTotal);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Mobile World
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>
          </ul>
          <div>
            <small className="me-2">{totalCartProducts} products in</small>
            <img
              role="button"
              src={CartIcon}
              alt="Cart Icon"
              width={24}
              height={24}
              className=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
