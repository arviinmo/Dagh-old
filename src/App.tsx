import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: fixed;
  margin-left: 25%;
  margin-top: 8%;
  padding: 5px;
  width: 62rem;
  height: 540px;
  border: 2px solid;
  border-radius: 10px;
`;

function App() {
  return (
    <div>
      <Container>
        <h1>hello</h1>
      </Container>
    </div>
  );
}

export default App;
