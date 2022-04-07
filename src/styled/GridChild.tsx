import styled from "styled-components";

export type GridChildProps = {
    columnStart?: number;
  columnEnd?: number;
  rowStart?: number;
    rowEnd?: number;
    justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch';
    



}
const GridChild = styled.div<GridChildProps>`
    grid-column-start: ${props => props.columnStart || 1};
    grid-column-end: ${props => props.columnEnd || 1};
    grid-row-start: ${props => props.rowStart || 1};
    grid-row-end: ${props => props.rowEnd || 1};
    justify-self: ${props => props.justifySelf || 'center'};
    align-self: ${props => props.alignSelf || 'center'};
    font-size:1rem;
    

`
export default GridChild