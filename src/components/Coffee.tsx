import React from "react";
import styled from "styled-components";

const Button = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  width: fit-content;
  text-decoration: none;
  display: inline-flex;
  color: #ffffff;
  background-color: #00ADB5;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.1px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;
  margin: 0 20px 20px 0;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #ffffff;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 5px;
  font-size: 1.25rem;
  vertical-align: middle;
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/smigle">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <Text>Buy me a coffee</Text>
    </Button>
  );
}

export default Coffee;
