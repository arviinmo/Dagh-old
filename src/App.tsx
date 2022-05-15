import React from "react";
import styled from "styled-components";
import Footer from "./pages/Footer";
import ParagraphCalculator from "./components/ParagraphCalculator";
import ReadSpeed from "./components/ReadSpeed";
import WordCalculator from "./components/WordCalculator";
import Header from "./components/Header";

const Container = styled.div`
`;

const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  margin-left: 25%;
  margin-top: 7%;
  width: 62rem;
  height: 600px;
  border: 1px solid;
  top: 0;
`;

function App() {
  return (
    <Container>
      <Header />
      <InputSection>
        <WordCalculator />
        <ParagraphCalculator />
        <ReadSpeed />
      </InputSection>
      <Footer />
    </Container>
  );
}

export default App;
