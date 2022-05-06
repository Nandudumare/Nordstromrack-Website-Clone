import React, { useState } from "react";

import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./Pay.module.css";
// import {ReactSpinner} from 'react-spinning-wheel';
// import 'react-spinning-wheel/dist/style.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button, Spinner } from 'react-bootstrap'

const Payment = () => {
  const [isHide, setIsHide] = useState(true);

  const formData = useSelector((state) => state.Data.formData);
  console.log("formData:", formData);

  setTimeout(() => setIsHide(false), 5000);

  return (
    <div className={styles.div}>
      {!isHide ? (
        <div className={styles.paymentdiv}>
          <h1>Thank you!</h1>
          <p>Your Payment is Successfully Done.</p>
          <button className={styles.button}>Home</button>
        </div>
      ) : (
        <div>
          {/* <ReactSpinner /> */}

          {/* <Spinner/> */}

          <Spinner
            style={{ width: "30px", height: "30px", marginRight: "30px" }}
            animation="grow"
            size="20px"
          />
          {/* <Spinner  style={{width:"30px",height:"30px",marginRight:"10px"}} animation="grow" size="30px" /> */}

          <Spinner
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
            animation="grow"
            size="30px"
          />

          {/* <Spinner  style={{width:"30px",height:"30px",marginRight:"10px"}} animation="grow" size="30px" /> */}
          <Spinner
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
            animation="grow"
            size="30px"
          />
          {/* <Spinner  style={{width:"25px",height:"25px",marginRight:"10px"}} animation="grow" size="30px" /> */}
          {/* <Spinner  style={{width:"20px",height:"20px",marginRight:"10px"}} animation="grow"  size="sm" /> */}
          {/* <Spinner  style={{width:"15px",height:"15px",marginRight:"10px"}} animation="grow"  size="sm" /> */}
          {/* <Spinner  style={{width:"10px",height:"10px",marginRight:"10px"}} animation="grow"  size="sm" /> */}
          <h2>Please wait....</h2>
          {/* <Spinner  animation="border" /> */}
        </div>
      )}
    </div>
  );
};

export default Payment;
