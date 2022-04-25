import styled from "styled-components";

type gridProps = {
    templatecolumns?: string;
    templaterows?: string;
    justifyitems?: 'start' | 'end' | 'center' | 'stretch';
    alignitems?: 'start' | 'end' | 'center' | 'stretch';
    width?: string;
    height?: string;
    columngap?: string;
    rowgap?: string;
    padding?: string;
    margin?: string;
    


}

const Grid = styled.div<gridProps>`
    display:grid;
    grid-template-columns:${props => props.templatecolumns || '1fr'};
    grid-template-rows:${props => props.templaterows || '1fr'};
    justify-items:${props => props.justifyitems || 'center'};
    align-items:${props => props.alignitems || 'center'};
    width:${props =>  props.width|| ''};
    height:${props => props.height || ''};
    column-gap:${props => props.columngap || '0px'};
    row-gap:${props => props.rowgap || '0px'};
    padding:${props=>props.padding||'0px'};
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