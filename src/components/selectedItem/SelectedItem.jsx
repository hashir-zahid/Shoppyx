import React, { useContext, useState } from "react";

import { Link, useParams , useNavigate} from "react-router-dom";
import "./SelectedItem.css";
import items from "../../data/items.json";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function SelectedItem() {
  const navigate = useNavigate();
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(cart.findIndex((c) => c.id === itemId) > -1);

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} width="520px" height="530px"/>
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">Rs. {item.price}</div>

          <select className="item-size">
            <option value={"S"}> Select size (S)</option>
            <option value={"M"}> Select size (M)</option>
            <option value={"L"}> Select size (L)</option>
            <option value={"XL"}> Select size (XL)</option>
          </select>
          <button
            className="item-btn"
            disabled={isAdded}
            onClick={() => {
              addItemToCartList(item);
              setIsAdded(true);
              navigate('/');
            }}
          >
            Add To Cart
          </button>
          <p className="item-description">
            Discover timeless fashion crafted for comfort and confidence. From casual wear to statement pieces, our clothing collection blends modern trends with premium fabrics. Whether you're dressing for the everyday or elevating your look for a special occasion, our apparel is designed to fit your lifestyle — effortlessly stylish, perfectly you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectedItem;