import React, {useState} from 'react';
import styled from 'styled-components';

import {Board, StartScreen, ResetScreen} from './components';
import {Winner} from './components/Board';
import {motion} from "framer-motion";

const variants = {

    GAME: {
        opacity: 1,
        scale: 1,
        width: '500px',
        height: '500px',
        transition: {type: 'spring', duration: .8}
    },
    START: {
        opacity: 1,
        scale: 1,
        width: '200px',
        height: '100px',
        transition: {type: 'spring', duration: .8},
    },
    RESET: {
        opacity: 1,
        scale: 1,
        width: '350px',
        height: '300px',
        transition: {type: 'spring', duration: .8},
    },
    hidden: {opacity: 0, scale: .8}
}

const BoardContainer = styled(motion.div).attrs(() => ({
    initial: 'hidden',
    variants,
}))`
  display: flex;
  justify-content: center;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffffff;
  flex-direction: column;
`;
const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 5px;
  font-size: 4rem;
  text-shadow: -3px 3px #00000066;
  font-family: 'Varela Round', sans-serif;
`
type GameState = 'START' | 'GAME' | 'RESET';

function App() {
    const [winner, setWinner] = useState<Winner>(undefined);
    const [gameState, setGameState] = useState<GameState>("START");

    const onStart = () => setGameState('GAME');

    const onGameEnd = (winner: Winner) => {
        setWinner(winner);
        setGameState('RESET');
    }
    const onReset = () => {
        setWinner(undefined);
        setGameState('GAME');
    }

    return (
        <>
            <Heading>Tic-Tac-Toe</Heading>
            <BoardContainer animate={gameState}>
                {{
                    START: <StartScreen onStart={onStart}/>,
                    GAME: <Board onGameEnd={onGameEnd}>Start</Board>,
                    RESET: <ResetScreen winner={winner} onReset={onReset}/>,
                }[gameState]}
            </BoardContainer>
        </>
    );
}

export default App;
