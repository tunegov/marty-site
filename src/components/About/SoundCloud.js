import React from 'react'

import {
    Wrapper,
    BackgroundWrapper,
    BackgroundWhite,
    SocialWrapper,
    BackgroundImage
} from '../../styled/SoundCloud'

import Social from '../Common/Social'

import martySound from '../../resources/martySound.png'

export default (props) => {
    return (
        <Wrapper isMobile={props.isMobile}>
            <iframe width="100%" height="350" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/878254612&color=%23141414&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>
            {!props.isMobile && <BackgroundWhite url={martySound}>
                <BackgroundWrapper >
                    <SocialWrapper>
                        <div></div>
                        <Social vertical soundCloud width="320px" />
                    </SocialWrapper>
                </BackgroundWrapper>
            </BackgroundWhite>
            }
        </Wrapper>
    )
}