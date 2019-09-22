import React, { memo } from 'react'

import { Wrapper } from '../styled/Main'

import Social from '../components/Common/Social'
import Logo from '../components/Main/Logo'
import Text from '../components/Main/Text'
import Picture from '../components/Main/Picture'


const Main = (props) => {
    return (
        <>
            <Logo />
            <Social vertical absolute />
            <Wrapper isMobile={props.isMobile}>
                <Text isMobile={props.isMobile} />
                <Picture isMobile={props.isMobile} />
            </Wrapper>
        </>
    )
}

export default memo(Main)