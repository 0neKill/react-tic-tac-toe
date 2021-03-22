import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {Cells,} from './';
import {CellValue} from './Cells';

const BoardWrapper = styled.div`
  background-color: #999999;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 6px;
  row-gap: 6px;
`;


export type Winner = CellValue | 'tie';

type BoardProps = {
    onGameEnd: (winner: Winner) => void;
};
const winningConditions: Array<number[]> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //Горизонтально
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //Вертикально
    [0, 4, 8], [2, 4, 6], //Диагольно
];

export const Board: React.FunctionComponent<BoardProps> = ({onGameEnd}) => {
    const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined)); //

    const currentCell: CellValue = cells.filter(Boolean).length % 2 ? '0' : 'x';
    // const currentCell: CellValue = cells.filter(cell => cell).length % 2 ? '0' : 'x';

    const winningCondition: Array<number> | undefined = winningConditions.find(cond => {
        const line = cond.map(cellIndex => cells[cellIndex]);
        return line[0] && line.every(cellValue => cellValue === line[0]);
    });

    const tie: boolean = cells.filter(Boolean).length === 9;
    // const tie: boolean = cells.filter(cell => cell).length === 9;
    const winningShape: Winner = winningCondition ? cells[winningCondition[0]] : tie ? 'tie' : undefined;

    useEffect(() => {
        if (winningShape) return onGameEnd(winningShape);
    }, [winningShape, onGameEnd]);

    const toggleCell = (index: number) => {
        setCells(cells => cells.map((cell, idx) => {
            if (index === idx && cell === undefined) return currentCell
            return cell;
        }))
    }

    return <BoardWrapper>
        {
            cells.map((cell, index) => (
                <Cells key={`${cell}_${index}`}
                       index={index} toggle={toggleCell} value={cell}/>
            ))
        }
    </BoardWrapper>
}