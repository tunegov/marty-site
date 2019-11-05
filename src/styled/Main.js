import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${props => props.isMobile ? css`
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    ` : css`
        display: grid;
        position: relative;
        z-index: 999;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        padding: 5vh 5vw 20vh 5vw;
    `}
`

export const ConcertText = styled.h1`
    margin-top: 5vh;
    text-align: center;
    font-size: 2.2em;
    font-weight: 800;
    text-transform: uppercase;
    background: linear-gradient(45deg, #0DEDD1 33%, #9C27A6 66%, #9C27A6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${props => props.isMobile && css`
        margin-top: 1vh;
        font-size: 1.3em;
    `}
`

export const ContactMeBlock = styled.div`
    margin: 5vh auto 0 auto;
    width: 400px;
    text-align: center;
    position: relative;
    background: linear-gradient(45deg, #9C27A6 66%, #9C27A6);

    ${props => props.isMobile && css`
        margin: 2vh auto 0 auto;
        zoom: 70%;
    `}
`

export const ContactMeText = styled.a`
    text-align: center;
    padding: 1vh 0;
    width: 100%;
    display: block;
    font-size: 2em;
    font-weight: 500;
    text-transform: uppercase;
    color: white !important;

    ${props => props.isMobile && css`
        font-size: 1.8em;
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
    left 35px;
    font-size: 2em;
    color: white;

    ${props => props.isMobile && css`
        font-size: 1.4em;
        left 0;
        right: 0;
        text-align: center;
    `}

    :hover {
        color: white;
        text-decoration: none;
    }
`

export const NumberIcon = styled.img`
    margin-right: 10px;

    ${props => props.isMobile ? css`
        width: 30px;
        height: 30px;
    `:
        css`
            width: 40px;
            height: 40px;
        `
    }
`

export const ContactText = styled.h2`
    color: white;
    font-size: 1.5em;
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
        margin: 5vh auto 0 auto;
    `}
`

export const InfoText = styled.a`
    min-width: 100px;
    max-width: 200px;
    padding: 0 1.5vw;
    text-align: center;
    color: white !important;
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
        margin-bottom: 5vh;
    `}

    :hover {
        color: white;
        text-decoration: none;
    }
`


export const PictureBlock = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${props => props.isMobile && css`
        margin-top: 10vh;
        height: 90vw
        width: auto
    `}
`

export const MartyImage = styled.img`
    width: 50vw;

    ${props => props.isMobile && css`
        width: 90vw
    `}
`
