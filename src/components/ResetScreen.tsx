import React from 'react';
import {Winner} from "./Board";
import styled from "styled-components";
import {motion} from "framer-motion";

type ResetScreenProps = {
    winner: Winner,
    onReset: () => void;
}
const ResetScreenButton = styled.button`
  border: 0;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #333333;
  background: none;
`;

const variants = {
    hidden: {opacity: 0, scale: .1},
    visible: {opacity: 1, scale: 1, transition: {delay: .2}}
}
const WinnerHeader = styled(motion.h2).attrs(() => ({
    initial: 'hidden',
    variants,
}))`
  color: #333333;
  text-align: center;
  margin-top: 0;
  font-size: 4rem;
  font-family: 'Varela Round', sans-serif;
`

export const ResetScreen: React.FunctionComponent<ResetScreenProps> = ({onReset, winner}) => {
    return <>
        <WinnerHeader animate='visible'>{winner === 'tie' ? 'It is a tie' : `${winner} is a winner`}</WinnerHeader>
        <ResetScreenButton onClick={onReset}>Restart</ResetScreenButton>
    </>
}