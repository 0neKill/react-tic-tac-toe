import React from 'react';
import styled from "styled-components";



const StartScreenButton = styled.button`
  border: 0;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #333333;
  background: none;
`;

type StartScreenProps = {
    onStart: () => void
}

export const StartScreen: React.FunctionComponent<StartScreenProps> = ({onStart}) => {
    return <StartScreenButton onClick={onStart}>Start</StartScreenButton>
}