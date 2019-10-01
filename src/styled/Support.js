import styled, { css } from 'styled-components'

export const IconWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1vw;
`

export const IconFixed = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 999999;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        
        > div {
            display: block;
        }
    }

    > div {
        display: none;
        color: white;
        text-decoration: none;
        margin-right: 20px;

        :hover {
            color: white;
            text-decoration: none;
        }
    }

    ${props => props.isMobile ? css`
        bottom: 2vh;
        right: 3vw;
    ` : css`
        bottom: 6vh;
        right: 5vw;
    `}
`

export const Icon = styled.img`
    width: auto;
    height: 40px;
    object-fit: contain;
`

export const IconBig = styled.img`
    width: auto;
    object-fit: contain;
    border-radius: 40px;
    z-index: 9000000;

    
    &:hover {
        animation: bloop 1s linear;
    }

    ${props => props.animate && css`
        animation: bloop 1s linear;
        animation-iteration-count: 3;
    `}

    ${props => props.isMobile ? css`
        height: 50px;
    ` : css`
        height: 65px;
    `}
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