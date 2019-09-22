import styled from 'styled-components'

export const Wrapper = styled.footer`
    background: black;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`

export const FooterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33vw;
    padding: 0 2vw;
    ${props => props.left && 'justify-content: flex-start;'}
    ${props => props.right && 'justify-content: flex-end;'}
`

