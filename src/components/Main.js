import React from 'react';
import styled from 'styled-components';

const Main = (props) => {
    return (
        <Maincontainer>
            <Logo>Clgmania</Logo>
            <Slogan>Tagline</Slogan>
            <Paragraph>
            While it may not be obvious to everyone, 
            there are a number of reasons creating random paragraphs can be useful.
            </Paragraph>
            <LearnButton>Learn more</LearnButton>
        </Maincontainer>
    )
}

const Maincontainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  margin-top: 70px;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 1;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const LearnButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

export default Main;