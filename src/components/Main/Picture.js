import React, { memo } from 'react'

import { PictureBlock, MartyImage, ImageIcon } from '../../styled/Main'

import marty from '../../resources/marty.png'
import icon_dots from '../../resources/icon_dots.png'
import icon_rect from '../../resources/icon_rect.png'

const Picture = (props) => {
    return (
        <PictureBlock isMobile={props.isMobile}>
            <MartyImage
                isMobile={props.isMobile}
                src={marty}
            />
            {/* <ImageIcon icon={1} src={icon_dots} />
            <ImageIcon icon={2} src={icon_dots} />
            <ImageIcon icon={3} src={icon_dots} />
            <ImageIcon icon={4} src={icon_rect} />
            <ImageIcon icon={5} src={icon_rect} />
            <ImageIcon icon={6} src={icon_rect} />
            <ImageIcon icon={7} src={icon_rect} /> */}

        </PictureBlock >
    )
}

export default memo(Picture)