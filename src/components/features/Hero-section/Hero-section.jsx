import "./Hero-section.css";
import React from "react";
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className="hero_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2>
                Discover digital art and collect <br />
                <span>sell extraordinary</span> NFTs 
              </h2>
              <p>
              Welcome to the NFT's world, here you can discover digital art, collect rare NFTs and also create your own NFTs.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button className="explore_btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create_btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>

              </div>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_img">
              <img className="w-100" src="https://raw.githubusercontent.com/codingwithmuhib/React-NFT-Website/getting-started/src/assets/images/hero.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default HeroSection;
