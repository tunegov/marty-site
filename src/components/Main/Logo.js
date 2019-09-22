import React, { memo } from 'react'

import { Wrapper, Icon } from '../../styled/Logo'

import logoBig from '../../resources/logoBig.png'

const Logo = (props) => {
    return (
        <Wrapper>
            <Icon
                isMobile={props.isMobile}
                src={logoBig}
            />
        </Wrapper>
    )
}

export default memo(Logo)