import React, { memo } from 'react'

import { PictureBlock, MartyImage } from '../../styled/Main'

import marty from '../../resources/marty.png'

const Picture = (props) => {
    return (
        <PictureBlock isMobile={props.isMobile}>
            <MartyImage
                isMobile={props.isMobile}
                src={marty}
            />
        </PictureBlock >
    )
}

export default memo(Picture)