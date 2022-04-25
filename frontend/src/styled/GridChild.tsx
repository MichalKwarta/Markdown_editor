import styled from "styled-components";

export type GridChildProps = {
    columnstart?: number;
  columnend?: number;
  rowstart?: number;
    rowend?: number;
    justifyself?: 'start' | 'end' | 'center' | 'stretch';
  alignself?: 'start' | 'end' | 'center' | 'stretch';
  media?: string;
    



}
const GridChild = styled.div<GridChildProps>`
    grid-column-start: ${props => props.columnstart || 1};
    grid-column-end: ${props => props.columnend || 1};
    grid-row-start: ${props => props.rowstart || 1};
    grid-row-end: ${props => props.rowend || 1};
    justify-self: ${props => props.justifyself || 'center'};
    align-self: ${props => props.alignself || 'center'};
    font-size:1rem;
    @media print {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    

`
export default GridChild