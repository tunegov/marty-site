import React, { memo } from 'react'

import { Wrapper, Icon } from '../../styled/Logo'

import logoBig from '../../resources/logoBig.png'

const Logo = () => {
    return (
        <Wrapper>
            <Icon
                src={logoBig}
            />
        </Wrapper>
    )
}

export default memo(Logo)