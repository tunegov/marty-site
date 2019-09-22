import React, { memo } from 'react'

import { Wrapper, Icon } from '../../styled/DesignerLogo'

import logoDesigner from '../../resources/logoDesigner.png'

const DesignerLogo = () => {
    return (
        <Wrapper>
            <Icon
                src={logoDesigner}
            />
        </Wrapper>
    )
}

export default memo(DesignerLogo)