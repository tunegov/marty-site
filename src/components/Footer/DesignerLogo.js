import React, { memo } from 'react'

import { Wrapper, Icon } from '../../styled/DesignerLogo'
import { designerUrl } from '../../constants/info'

import logoDesigner from '../../resources/logoDesigner.png'

const DesignerLogo = () => {
    return (
        <Wrapper href={designerUrl} target="_blank" rel="noopener noreferrer">
            <Icon
                src={logoDesigner}
            />
        </Wrapper>
    )
}

export default memo(DesignerLogo)