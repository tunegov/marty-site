import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => css`
    ${props.vertical ? 'height: 200px; width: 35px; flex-direction: column;' : 'height: 35px; width: 200px; justify-content: space-between;'}
    ${props.absolute && 'position: absolute; top: 20px; right: 20px;'}
    ${props.width ? 'width: ' + props.width + ';' : ''}
    `}
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`

export const Link = styled.a`
    
`