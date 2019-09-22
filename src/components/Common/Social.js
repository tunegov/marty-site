import React, { memo } from 'react'

import { Wrapper } from '../../styled/Social'
import SocialIcon from './SocialIcon'

import { instagramUrl, youtubeUrl, vkUrl, fbUrl } from '../../constants/info'

import instagramIcon from '../../resources/instagram.png'
import youtubeIcon from '../../resources/youtube.png'
import vkIcon from '../../resources/vk.png'
import facebookIcon from '../../resources/facebook.png'

const Social = (props) => {
    return (
        <Wrapper
            hide={props.hide}
            vertical={props.vertical}
            width={props.width}
            absolute={props.absolute}
            isMobile={props.isMobile}
        >
            <SocialIcon
                href={instagramUrl}
                src={instagramIcon}
                isMobile={props.isMobile}
            />
            <SocialIcon
                href={youtubeUrl}
                src={youtubeIcon}
                isMobile={props.isMobile}
            />
            <SocialIcon
                href={vkUrl}
                src={vkIcon}
                isMobile={props.isMobile}
            />
            <SocialIcon
                href={fbUrl}
                src={facebookIcon}
                isMobile={props.isMobile}
            />
        </Wrapper>
    )
}

export default memo(Social)