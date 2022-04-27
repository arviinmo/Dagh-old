import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 62rem;
  height: 450px;
  background-color: red;
`;

function App() {
  return (
    <div className="app">
      <Container>
        <h1>hello</h1>
      </Container>
    </div>
  );
}

export default App;
