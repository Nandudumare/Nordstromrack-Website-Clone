import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./Cart.module.css";

const Cart = () => {
  const data = useSelector((state) => state.Data.data);
  const length = data.length;

  const [price, setPrice] = useState(20);

  const handleChange = (e) => {
    let value = e.target.value;
    console.log("value:", value);
    if (value === "1") {
      setPrice((prev) => prev * 1);
    } else if (value === "2") {
      setPrice((prev) => prev * 2);
    }
  };
  return (
    <div className={Styles.div__1}>
      <div style={{ border: "2px solid yellow" }}>
        <div
          style={{
            height: "50px",
            width: "350px",
            display: "grid",
            gridTemplateColumns: "170px 170px",
            border: "2px solid green",
          }}
        >
          <div style={{ border: "2px solid pink", backgroundColor: "#e3e3e3" }}>
            <h6 style={{ marginTop: "10px", textAlign: "center" }}>
              Shopping Bag ({length})
            </h6>
          </div>
          <div style={{ border: "2px solid pink" }}>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Save For Later (0)
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ marginTop: "20px" }}>Shopping Bag</h4>
          <p style={{ marginTop: "-5px" }}>
            Items in your bag are not on hold.
          </p>
          <p style={{ marginTop: "-5px" }}>
            Add a gift message when you check out.
          </p>
          <p style={{ marginTop: "-5px" }}>
            Free Shipping on Orders over $89 for a limited time or free ship to
            U.S. stores.Learn more.{" "}
          </p>
        </div>
      </div>

      <div classname={Styles.div__2}>
        {data.map((item) => {
          return (
            <div className={Styles.div__3}>
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                <p>{item.title}</p>
                <button>Remove</button>
              </div>
              <div style={{ marginTop: "20px", marginLeft: "70px" }}>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="">Qty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div style={{ marginTop: "20px", marginLeft: "100px" }}>
                <p>{price} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
