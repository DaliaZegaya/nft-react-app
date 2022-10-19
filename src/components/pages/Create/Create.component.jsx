import "./Create.css";
import React from "react";
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../../features/Common-section/Common-section'
import NftCard from '../../features/Nft-card/Nft-card'

const item = {
  id: "04",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp",
  creator: "Trista Francis",
  creatorImg: "https://raw.githubusercontent.com/codingwithmuhib/React-NFT-Website/main/src/assets/images/ava-01.png",
  currentBid: 7.89,
}

function Create() {
  return (
    <div className="create">
      <CommonSection title="Create Item" />

      <div>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-5 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="9" sm="6">
              <div className="create_item">
                <form className="form_action">

                  <div className="form_input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload_input" />
                  </div>

                  <div className="form_input">
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder="Enter price for one item (ETH)" />
                  </div>

                  <div className="form_input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className="d-flex align-items-cente justify-content-between">

                    <div className="form_input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form_input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>

                  </div>

                  <div className="form_input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>

                  <div className="form_input">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" rows="7" className="w-100" placeholder="Enter description"></textarea>
                  </div>

                  <button className="singleNft_btn">Create</button>

                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Create;
