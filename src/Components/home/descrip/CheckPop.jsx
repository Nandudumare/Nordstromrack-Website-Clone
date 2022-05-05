import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Button } from "react-bootstrap";

export function CheckPop() {
  const [show, setShow] = useState(false);

  return (
    <div>
    <Button style={{ marginLeft:"400px",position:"fix",zIndex:"100",width:"70px",height:"60px"}} variant="primary" onClick={() => setShow(true)}>
           Add to Cart

      </Button>
   
     

      <Modal
      style={{marginLeft:"980px",marginTop:"25px" ,width:"376px",height:"555px"}}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title" >
            How can We help you?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"500px",width:"376px"}}>
        <div style={{texalign:"left"}}>
          <div><input style={{marginBottom:"20px", width:"316px",height:"64px",border:"2px solid whitesmoke" }} placeholder="Serch for answers"></input></div>
          <div><button style={{texalign:"left",marginBottom:"20px",width:"300px",height:"64px",backgroundColor:"white",border:"2px solid whitesmoke"}}>Cancel an Order</button></div>
          <div><button style={{texalign:"left",marginBottom:"20px",width:"300px",height:"64px",backgroundColor:"white",border:"2px solid whitesmoke"}}>Order Status</button></div>
          <div><button style={{texalign:"left",marginBottom:"20px",width:"300px",height:"64px",backgroundColor:"white",border:"2px solid whitesmoke"}}>Return an Item</button></div>
          <div><button style={{texalign:"left",marginBottom:"20px",width:"300px",height:"64px",backgroundColor:"white",border:"2px solid whitesmoke"}}>Return Refund Status</button></div>
          {/* <div  style={{width:"370px",height:"80px",bottom:"64px",backgroundColor:"teal",backgroundColor:"whitesmoke"}} >Chat is currently unavailable.</div>
      */}
        </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CheckPop