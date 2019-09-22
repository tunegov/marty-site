import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;

    ${props => css`
        ${props.vertical ? 'height: 200px; width: 30px; flex-direction: column;' : 'height: 30px; width: 200px; justify-content: space-between;'}
        ${props.absolute && 'position: absolute; top: 20px; right: 20px;'}
        ${props.width ? 'width: ' + props.width + ';' : ''}
    `}

    ${props => props.hide && 'display: none;'}
    ${props => props.isMobile && !props.absolute && css`
        width: 80vw;
        justify-content: space-around;
        margin: 2vh 10vw;
    `}
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;

    ${props => props.isMobile && props.absolute && css`
        width: 20px;
        height: 20px;
    `}
`

export const Link = styled.a`
    
`