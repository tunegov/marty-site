import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 5vh;
`

export const TextWrapper = styled.div`
    color: white;
    position: absolute;
    font-size: 1.2vw;
    top: 4vh;
    left: 2vw
`

export const TextTitle = styled.h2`
    color: white;
    font-size: 1.7vw;
    font-weight: 600;
    margin-bottom: 20px;
`

export const TextBlock = styled.div`
    width: 40vw;
    position: relative;

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
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 0 10vw;
    z-index: 999;
    position: relative;
`
