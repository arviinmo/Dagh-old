import React from "react";
import styled from "styled-components";
import Footer from "./pages/Footer";
import ParagraphCalculator from "./components/ParagraphCalculator";
import ReadSpeed from "./components/ReadSpeed";
import WordCalculator from "./components/WordCalculator";

const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  margin-left: 25%;
  margin-top: 6%;
  width: 62rem;
  height: 600px;
  border: 1px solid;
`;

function App() {
  return (
    <div>
      <InputSection>
        <WordCalculator />
        <ParagraphCalculator />
        <ReadSpeed />
      </InputSection>
      <Footer />
    </div>
  );
}

export default App;
