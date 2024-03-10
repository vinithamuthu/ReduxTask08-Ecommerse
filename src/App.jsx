import "./App.css";
import { Menu } from "./components/menu";
import Products from "./components/products";
import { useSelector } from "react-redux";
import { totalPrice } from "./store/cart.slice";

function App() {
  const totalCartValue = useSelector(totalPrice);
  return (
    <>
      <Menu></Menu>
      <div className="container py-4">
        <div className="alert alert-primary" role="alert">
          Total value in cart {totalCartValue}
        </div>
        <Products />
      </div>
    </>
  );
}

export default App;
