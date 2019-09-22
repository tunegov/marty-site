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
            vertical={props.vertical}
            width={props.width}
            absolute={props.absolute}
        >
            <SocialIcon href={instagramUrl} src={instagramIcon} />
            <SocialIcon href={youtubeUrl} src={youtubeIcon} />
            <SocialIcon href={vkUrl} src={vkIcon} />
            <SocialIcon href={fbUrl} src={facebookIcon} />
        </Wrapper>
    )
}

export default memo(Social)