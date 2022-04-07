import styled from "styled-components"

type FlexStyledProps = {
    direction?: 'row' | 'column',
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
    width?: string;
    height?: string;
    extra?: string;
    isbg?: 1|0;
}



const FlexStyled = styled.div<FlexStyledProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    flex-wrap: ${props => props.wrap || 'wrap'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    width:${props => props.width || ''};
    height:${props => props.height || ''};

    background-color: ${props => props.isbg ===1? props.theme.bg:props.theme.elementColor || 'transparent'};
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    ${props=>props.extra||''}
`

FlexStyled.defaultProps = {
    isbg: 0
}

export default FlexStyled