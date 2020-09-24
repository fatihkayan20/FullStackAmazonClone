import { Star } from "@material-ui/icons";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image} alt="" className="checkoutproduct__image" />

      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small> <strong> {price}</strong>
        </p>

        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <Star key={i} />{" "}
              </p>
            ))}
        </p>

        {hideButton ? null : (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
