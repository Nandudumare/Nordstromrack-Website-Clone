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
<<<<<<< Updated upstream
  console.log("formData:", formData);
=======
  // console.log("formData:", formData);
  const navigate = useNavigate();
>>>>>>> Stashed changes

  // console.log(formData.fname,"namehere")

  setTimeout(() => setIsHide(false), 5000);

  return (
    <div className={styles.div}>
      {!isHide ? (
        <div className={styles.paymentdiv}>
<<<<<<< Updated upstream

          <img style={{width:"80px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfD7SshGzpdEJQU6y9ViAWpuHHXI97tTNEQ&usqp=CAU"/>
          <h1>Thank You!</h1>
          <h4>You have Placed the  Order {"\n"} Successfully</h4>
          <p>Your order has been proccessed and {"\n"}
          will be diliver soon</p>

          

    
        
          <p className={styles.add} >Name: {formData.fname}</p>
          {/* <p>{formData.fname}</p> */}
      

          <p className={styles.add}>Delivery address: {formData.address}</p>
          <p></p>


          <h4 >Happy Shopping {formData.fname} {formData.lname}</h4>
          <button className={styles.button}>Home</button>
=======
          <h3>Thank you! {formData.fname}</h3>
          <p>Your Payment is Successfully Done.</p>
          <p>
            The order Will deliver at {formData.address} by tommarro at 8'O
            clock .
          </p>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
>>>>>>> Stashed changes
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
