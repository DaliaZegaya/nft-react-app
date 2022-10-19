import "./Nft-details.css";
import React from "react";
import CommonSection from "../../features/Common-section/Common-section";
import {Link, useParams} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'
import { NFT__DATA } from "../../../data/data";
import LiveAuction from '../../features/Live-auction/Live-auction'

function NftDetails() {
  const {id} = useParams()
  const singleNft = NFT__DATA.find(item=> item.id == id)

  return (
    <div className="nft-details">
      <CommonSection title={singleNft.title}/>

      <div>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img src={singleNft.imgUrl} alt="" className="w-100 single_nft_img" />
            </Col>

            <Col lg="6">
            <div className="single_nft_content">
              <h2>{singleNft.title}</h2>
              <div className="d-flex align-items-center justify-content-between mt-4 mb-4">

                <div className="d-flex align-items-center gap-4 single_nft_seen">
                  <span><i class="ri-eye-line"></i>234</span>
                  <span><i class="ri-heart-line"></i>123</span>
                </div>

                <div className="d-flex align-items-center gap-2 single_nft_more">
                  <span><i class="ri-send-plane-line"></i></span>
                  <span><i class="ri-more-2-line"></i></span>
                </div>

              </div>

              <div className="nft_creator d-flex gap-3 align-items-center">

                <div className="creator_img">
                  <img src={singleNft.creatorImg} alt="" className="w-100" />
                </div>

                <div className="creator_detail">
                  <p>Created By</p>
                  <h6>{singleNft.creator}</h6>
                </div>

              </div>

              <p className="my-4">{singleNft.desc}</p>
              <button className="singleNft_btn d-flex align-items-center gap-2 w-100"><i class="ri-shopping-bag-line"></i><Link to="/wallet">Place a Bid</Link></button>

            </div>
            </Col>
          </Row>
        </Container>
      </div>

      <LiveAuction/>

    </div>
  );
};

export default NftDetails;
