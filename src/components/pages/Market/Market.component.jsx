import "./Market.css";
import React,{useState} from "react";
import CommonSection from "../../features/Common-section/Common-section";
import NftCard from '../../features/Nft-card/Nft-card'
import { NFT__DATA } from "../../../data/data";
import {Container, Row, Col} from 'reactstrap'

function Market() {

  const [data, setDate] = useState(NFT__DATA)

  const handleCategory = ()=>{}

  const handleItems = ()=>{}

  const handleSort = (e)=>{
    const filterValue = e.target.value

    if(filterValue == "high"){
      const filterData = NFT__DATA.filter(item => item.currentBid > 6)
      setDate(filterData)
    }

    if(filterValue == "mid"){
      const filterData = NFT__DATA.filter(item => item.currentBid > 5.50 && item.currentBid < 6)
      setDate(filterData)
    }

    if(filterValue == "low"){
      const filterData = NFT__DATA.filter(item => item.currentBid > 4.89 && item.currentBid < 5.50)
      setDate(filterData)
    }

  }
  return (
    <div className="market">
      <CommonSection title={"MarketPlace"}/>

      <div>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market_product_filter d-flex align-items-center justify-content-between">

                <div className="filter_left d-flex align-items-center gap-5">
                  <div className="all_category_filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div className="all_items_filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>

                </div>

                <div className="filter_right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>

              </div>
            </Col>

            {
              data?.map(item=>
                <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item}/>
                </Col>
              )
            }
          </Row>
        </Container>

      </div>
    </div>
  );
};

export default Market;
