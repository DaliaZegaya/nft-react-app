import "./Nft-card.css";
import React, {useState}  from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function NftCard(props) {

  const [showModal, setShowModal] =useState(false)

  const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item
  return (
    <div className="single_nft_card">
    <div className="nft-img">
      <img src={imgUrl} alt="" className="w-100" />
    </div>

    <div className="nft_content">
      <h5 className="nft_title"><Link to={`/market/${id}`}>{title}</Link></h5>

      <div className="creator_info_div">
        <div className="creator_img">
          <img src={creatorImg} alt="" className="w-100" />
        </div>

        <div className="creator_info w-100 d-flex align-items-center justify-content-between">
          <div className="w-50">
            <h6>Created By</h6>
            <p>{creator}</p>
          </div>

          <div className="w-50">
            <h6>Current Bid</h6>
            <p>{currentBid} ETH</p>
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button className="bid_btn d-flex align-items-center gap-1" onClick={()=>setShowModal(true)}>
            <i className="ri-shopping-bag-line"></i>Place Bid
          </button>

          {showModal && <Modal setShowModal={setShowModal}/>}

          <span className="history_link"><Link to="#">Wiew History</Link></span>
        </div>

      </div>
    </div>
  </div>
  );
};

export default NftCard;
