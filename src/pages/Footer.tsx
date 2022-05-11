import React from "react";
import Coffee from "../components/Coffee";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffc271;
  width: 100%;
`;

const Button = styled.div`
  
`;

function Footer() {
  return (
    <Container>
      <Button>
        <Coffee />
      </Button>
    </Container>
  );
}

export default Footer;
