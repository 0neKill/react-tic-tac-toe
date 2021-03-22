import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";


import close_img from '../assets/close.svg';
import zero_img from '../assets/zero.svg';

const CellsContainer = styled.button`
  position: relative;
  background-color: #ffffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export type CellValue = 'x' | '0' | undefined;

type CellsProps = {
    value: CellValue,
    toggle: (index: number) => void,
    index: number
}

export const Cells: React.FunctionComponent<CellsProps> = ({value, toggle, index}) => {
    return <CellsContainer onClick={() => toggle(index)}><Image value={value}/></CellsContainer>
};

const variants = {
    hidden: {opacity: .5, transform: "translate3d(-50%,-50%,0) scale(0.5)"},
    visible: {opacity: 1, transform: "translate3d(-50%,-50%,0) scale(1)"},
}

const Shape = styled(motion.img).attrs(() => ({
    initial: 'hidden',
    variants,

}))`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
`

const Image: React.FunctionComponent<{ value: CellValue }> = ({value}) => {
    switch (value) {
        case "0":
            return <Shape animate='visible' src={zero_img} alt={value}/>
        case "x":
            return <Shape animate='visible' src={close_img} alt={value}/>
        default:
            return null;
    }
}
