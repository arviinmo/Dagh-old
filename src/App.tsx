import React from "react";
import styled from "styled-components";
import ParagraphCalculator from "./components/ParagraphCalculator";
import ReadSpeed from "./components/ReadSpeed";
import WordCalculator from "./components/WordCalculator";


const InputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: fixed;
  margin-left: 25%;
  margin-top: 8%;
  padding: 5px;
  width: 62rem;
  height: 540px;
  border: 1px solid;
  border-radius: 10px;
`;

function App() {
  return (
    <div>
      <InputSection>
        <WordCalculator />
        <ParagraphCalculator />
      </InputSection>
      <ReadSpeed />
    </div>
  );
}

export default App;
