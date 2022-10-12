import "./Live-auction.css";
import React from "react";
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import NftCard from "../Nft-card/Nft-card";
import { NFT__DATA } from '../../../data/data'

function LiveAuction() {
  return (
    <div className="live-auction">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live_auction_top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span> <Link to="/market">Explore more</Link></span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3">
              <NftCard key={item.id} item={item} />
            </Col>
          ))}

        </Row>
      </Container>
    </div>
  );
};

export default LiveAuction;
