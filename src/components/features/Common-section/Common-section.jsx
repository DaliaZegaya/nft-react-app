import "./Common-section.css";
import React from "react";
import {Container} from 'reactstrap'


function CommonSection({title}) {
  return (
    <div className="common_section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default CommonSection;
