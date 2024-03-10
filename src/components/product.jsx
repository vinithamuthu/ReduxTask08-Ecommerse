import PropTypes from "prop-types";
import PlusIcon from "../assets/plus.svg";
import MinusIcon from "../assets/minus.svg";
import { useDispatch } from "react-redux";
import { addProduct, clearProduct, removeProduct } from "../store/cart.slice";
const Product = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  brand,
  category,
  thumbnail,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card py-2">
        <div className="card-body">
          <div className="d-flex justified-content-center">
            <div className="px-4">
              <img src={thumbnail} alt={title} width="120rem;" />
            </div>
            <div>
              <small className="badge bg-secondary">{category}</small>
              <h4>{title}</h4>
              <p>
                <small className="me-2 text-primary">{brand}</small>
                <small>
                  Rating: <span>{rating}</span>
                </small>
              </p>

              <div>
                <span className="me-2 text-danger text-bold fw-bolder">
                  -{discountPercentage}%
                </span>
                <span className="me-2 fw-bolder">
                  &#8377;
                  {(price - price * (discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="text-muted">
                  <del>&#8377;{price}</del>
                </span>
              </div>
              <p className="my-2">{description}</p>
              <div className="d-flex">
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => {
                    dispatch(
                      addProduct({
                        id,
                        title,
                        description,
                        price,
                        discountPercentage,
                        rating,
                        brand,
                        category,
                        thumbnail,
                      })
                    );
                  }}
                >
                  <img
                    src={PlusIcon}
                    alt="Add to card"
                    width="18rem"
                    role="button"
                  />
                </button>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => {
                    dispatch(
                      removeProduct({
                        id,
                      })
                    );
                  }}
                >
                  <img
                    src={MinusIcon}
                    alt="Add to card"
                    width="18rem"
                    role="button"
                  />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    dispatch(clearProduct());
                  }}
                >
                  Clear cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  rating: PropTypes.number,
  discountPercentage: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Product;
