import styled, { css } from 'styled-components'

export const IconWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1vw;
`

export const Icon = styled.img`
    width: auto;
    height: 40px;
    object-fit: contain;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    ${props => props.isMobile ? css`
        padding: 3vh 5vw;
        justify-content: space-between;
    ` : css`
        padding: 1vh 10vw 5vh 10vw;
    `}
`

export const Text = styled.div`
    color: white;
    font-size: 1em;
    text-align: center;
`