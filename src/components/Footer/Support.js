import React, { memo } from 'react'

import { Wrapper, Icon, IconWrapper, Text } from '../../styled/Support'
import { designerUrl, customWearUrl, supportText } from '../../constants/info'

import logoDesigner from '../../resources/logoDesigner.png'
import customWear from '../../resources/customWear.png'

const Support = (props) => {
    return (
        <Wrapper isMobile={props.isMobile}>
            <Text>
                {supportText}
            </Text>
            <IconWrapper href={designerUrl} target="_blank" rel="noopener noreferrer">
                <Icon
                    src={logoDesigner}
                />
            </IconWrapper>
            <IconWrapper href={customWearUrl} target="_blank" rel="noopener noreferrer">
                <Icon
                    src={customWear}
                />
            </IconWrapper>
        </Wrapper>
    )
}

export default memo(Support)