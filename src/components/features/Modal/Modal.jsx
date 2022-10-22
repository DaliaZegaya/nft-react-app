import "./Modal.css";
import React from "react";

function Modal({setShowModal}) {
  return (
    <div className="modal_wrapper">

      {/* <span className="close_modal">
        <i class="ri-close-line" onClick={()=>setShowModal(false)}></i>
      </span> */}

      <div className="single_modal">
      <span className="close_modal">
        <i class="ri-close-line" onClick={()=>setShowModal(false)}></i>
      </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input_item mb-4">
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className="input_item mb-3">
          <h6>Enter Quantity, 7 aviailable</h6>
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>
            You must bid at least <span className="money">5.89 ETH</span>
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>
            Service Fee <span className="money">0.89 ETH</span>
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>
            Total Bid Amount <span className="money">5.89 ETH</span>
          </p>
        </div>

        <button className="place_bid_btn">
          Place a Bid
        </button>


      </div>
    </div>
  );
};

export default Modal;
