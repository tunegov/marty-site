import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 5vh;
`

export const TextWrapper = styled.div`
    color: white;

    ${props => props.isMobile ? css`
        font-size: 1em;
        text-align: justify;
        margin-bottom: 5vh;
    ` : `
        font-size: 1.2vw;
        position: absolute;
        top: 4vh;
        left: 2vw;
    `}
`

export const TextTitle = styled.h2`
    color: white;
    font-size: 1.7vw;
    font-weight: 700;
    margin-bottom: 20px;

    ${props => props.isMobile ? css`
        font-size: 1.5em;
        text-align: center;
    ` : `
        font-size: 1.7vw;
    `}
`

export const TextBlock = styled.div`
    position: relative;

    ${props => props.isMobile ? css`
        width: 100%;
        padding: 0 5vw;
    ` : `
        width: 40vw;
    `}

`

export const LeftImage = styled.img`
    position: absolute;
    width: 30vw;
    top: -40vh;
    left: 0;
`

export const RightImage = styled.img`
    position: absolute;
    width: 50vw;
    top: -100px;
    right: 0;
`

export const VideoWrapper = styled.iframe`

    ${props => props.isMobile ? css`
        width: 100%;
        height: 45vw;
        padding: 0 5vw;
    ` : `
        width: 100%;
        height: 100%;
    `}

`

export const Content = styled.div`
    ${props => props.isMobile ? css`
        display: flex;
        flex-direction: column;
        align-items: center;
    ` : css`
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        padding: 0 10vw;
        z-index: 999;
        position: relative;
    `}

`
