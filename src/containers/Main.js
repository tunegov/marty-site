import React, { memo } from 'react'

import { Wrapper } from '../styled/Main'

import Social from '../components/Common/Social'
import Logo from '../components/Main/Logo'
import Text from '../components/Main/Text'
import Picture from '../components/Main/Picture'


const Main = (props) => {
    return (
        <>
            <Logo isMobile={props.isMobile} />
            <Wrapper isMobile={props.isMobile}>
                <Text isMobile={props.isMobile} />
                <Picture isMobile={props.isMobile} />
            </Wrapper>
            <Social vertical absolute isMobile={props.isMobile} />
        </>
    )
}

export default memo(Main)