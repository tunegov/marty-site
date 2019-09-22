import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${props => props.isMobile ? css`
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    ` : css`
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        padding: 0 5vw;
    `}
`

export const ConcertText = styled.img`
    width: 45vw;
    ${props => props.isMobile && css`
        width: 90vw
    `}
`

export const TextBlock = styled.div`
    margin-top: 20vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${props => props.isMobile && css`
        margin-top: 5vh;
        justify-content: center;
        width: 100%;
    `}
`

export const NumberBlock = styled.div`
    margin: 5vh auto 0 auto;
    position: relative;

    ${props => props.isMobile && css`
        margin: 2vh auto 0 auto;
        zoom: 70%;
    `}
`

export const NumberText = styled.a`
    position: absolute;
    top: 30px;
    left 60px;
    font-size: 2em;
    color: white;

    ${props => props.isMobile && css`
        font-size: 1em;
        text-align: center;
    `}

    :hover {
        color: white;
        text-decoration: none;
    }
`

export const ContactText = styled.div`
    color: white;
    font-size: 1.6em;
    margin: 20px auto;

    ${props => props.isMobile && css`
        font-size: 1em;
        text-align: center;
    `}
`

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10vh auto 0 auto;

    ${props => props.isMobile && css`
        margin: 2vh auto 0 auto;
    `}
`

export const InfoText = styled.div`
    min-width: 100px;
    max-width: 200px;
    padding: 0 1.5vw;
    text-align: center;
    color: white;
    font-size: 1.3em;
    font-weight: 600;
    ${props => props.left && 'text-align: left;'}
    ${props => props.right && 'text-align: right;'}
    ${props => props.border && 'border-left: 2px solid white; border-right: 2px solid white;'}

    ${props => props.isMobile && css`
        min-width: 50px;
        max-width: 130px;
        font-size: .9em;
        text-align: center;
        padding: 0 10px;
        margin-bottom: 10vh;
    `}
`


export const PictureBlock = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${props => props.isMobile && css`
        margin-top: 10vh;
        width: 90vw
    `}
`

export const MartyImage = styled.img`
    width: 50vw;

    ${props => props.isMobile && css`
        width: 90vw
    `}
`
