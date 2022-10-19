import "./Contact.css";
import React from "react";
import CommonSection from '../../features/Common-section/Common-section'
import { Container, Row, Col } from 'reactstrap'

function Contact() {

  const handleSubmit= (e)=>{
    e.preventDefault()
  }

  return (
    <div>
      <CommonSection title="Contact" />

      <div>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop Us a Message</h2>
                <div className="contact mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form_input">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form_input">
                      <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form_input">
                      <input type="text" placeholder="Enter subject" />
                    </div>
                    <div className="form_input">
                      <textarea rows="7" placeholder="Write message"></textarea>
                    </div>

                    <button className="send_btn">Send a message</button>
                  </form>
                </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
};

export default Contact;
