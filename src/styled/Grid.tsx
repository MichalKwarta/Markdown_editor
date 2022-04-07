import styled from "styled-components";

type gridProps = {
    templateColumns?: string;
    templateRows?: string;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    width?: string;
    height?: string;
    columnGap?: string;
    rowGap?: string;

    margin?: string;
    


}

const Grid = styled.div<gridProps>`
    display:grid;
    grid-template-columns:${props => props.templateColumns || '1fr'};
    grid-template-rows:${props => props.templateRows || '1fr'};
    justify-items:${props => props.justifyItems || 'center'};
    align-items:${props => props.alignItems || 'center'};
    width:${props => `calc(${props.width} - ${props.columnGap})`|| ''};
    height:${props => props.height || ''};
    column-gap:${props => props.columnGap || '0px'};
    row-gap:${props => props.rowGap || '0px'};

    margin:${props => props.margin || '0px'};
    overflow-y:auto;
    overflow-x:hidden;

    position: relative;
    &::-webkit-scrollbar {
         width:1rem;

        border: 1px solid  ${props => props.theme.color}
    }
    &::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.color};
  outline: 1px solid slategrey;
}
    
    
`
export default Grid