import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const BackgroundWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: linear-gradient(270deg, #4C019E 0%, rgba(196, 196, 196, 0) 93.74%);  
`

export const BackgroundImage = styled.div`
    height: 350px;
    width: 35vw;
    position: absolute;
`

export const BackgroundWhite = styled.div`
    height: 350px;
    width: 35vw;
    position: relative;
    left: -3px;
    
    ${props => `background: url("${props.url}");`}
    
    background-size: 110%;
    `



export const SocialWrapper = styled.div`
    position: absolute;
    right: 0;
    padding: 15px 10px 15px 0;
`

