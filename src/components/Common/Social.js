import React, { memo } from 'react'

import { Wrapper } from '../../styled/Social'
import SocialIcon from './SocialIcon'

import {
    instagramUrl,
    youtubeUrl,
    vkUrl,
    fbUrl,
    telegramUrl,
    soundcloudUrl,
} from '../../constants/info'

import instagramIcon from '../../resources/instagram.png'
import youtubeIcon from '../../resources/youtube.png'
import vkIcon from '../../resources/vk.png'
import facebookIcon from '../../resources/facebook.png'
import telegramIcon from '../../resources/telegram.png'
import soundcloudIcon from '../../resources/soundcloud.png'

const Social = (props) => {
    return (
        <Wrapper
            hide={props.hide}
            vertical={props.vertical}
            width={props.width}
            absolute={props.absolute}
            isMobile={props.isMobile}
        >
            {props.soundCloud ?
                <SocialIcon
                    href={soundcloudUrl}
                    src={soundcloudIcon}
                    isMobile={props.isMobile}
                />
                : null}
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
            <SocialIcon
                href={telegramUrl}
                src={telegramIcon}
                isMobile={props.isMobile}
            />
        </Wrapper>
    )
}

export default memo(Social)