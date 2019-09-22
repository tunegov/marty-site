import styled, { css } from 'styled-components'

const Phone = styled.a`
    color: white;
    font-size: 1.3em;
    text-align: center;

    ${props => props.isMobile && css`
        font-size: 1em;
        text-align: center;
    `}

    :hover {
        color: white;
        text-decoration: none;
    }
`

export default Phone