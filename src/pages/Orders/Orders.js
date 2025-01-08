import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllorders = async () => {
    const response = await axios.get(url + "/api/order/listorders");
    if (response.data.success) {
      setOrders(response.data.data);
      // console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    // console.log(event, orderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllorders();
    }
  };

  useEffect(() => {
    fetchAllorders();
  }, []);

  return (
    <div className="order-add">
      <h3>Orders Page</h3>
      <div className="orders-list">
        {orders.map((orders, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {orders.items.map((item, index) => {
                  if (index === orders.items.lenth - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {orders.address.firstName + " " + orders.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{orders.address.street + ","}</p>
                <p>
                  {orders.address.city +
                    ", " +
                    orders.address.state +
                    ", " +
                    orders.address.country +
                    ", " +
                    orders.address.zipcode +
                    ", "}
                </p>
              </div>
              <p className="order-item-phone">{orders.address.phone}</p>
            </div>
            <p>Items : {orders.items.length}</p>
            <p>₹{orders.amount}</p>
            <select
              onChange={(event) => statusHandler(event, orders._id)}
              value={orders.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
