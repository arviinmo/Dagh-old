import React from "react";
import Coffee from "../components/Coffee";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

function Footer() {
  return (
    <Container>
      <Coffee />
    </Container>
  );
}

export default Footer;
