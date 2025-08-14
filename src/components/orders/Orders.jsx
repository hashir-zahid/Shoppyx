import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Orders.css"

function Orders() {
  const { orders } = useContext(GlobalContext);
  
  return (
    <div className="cart-list">
      {orders.length === 0 ? (
        <div className="no-orders">
          <h3>No orders yet</h3>
          <p>Your orders will appear here once you make a purchase</p>
        </div>
      ) : (
        orders.map((order) => (
          <div className="checkout-container" key={order.orderId}>
            <h3>#ID-62Z-{order.orderId}</h3>
            {order.items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-price">${item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Expected cash on delivery 3 - 6 days)
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;