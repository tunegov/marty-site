import React, { memo } from 'react'
import Plx from 'react-plx';

import AboutText from '../components/About/AboutText'
import LeftImage from '../components/About/LeftImage'
import RightImage from '../components/About/RightImage'
import Video from '../components/About/Video'
import SoundCloud from '../components/About/SoundCloud'

import { Wrapper, Content, MusicWrapper } from '../styled/About'

const About = (props) => {
    return (<>
        <Wrapper isMobile={props.isMobile}>
            {!props.isMobile && <RightImage />}
            {!props.isMobile && <LeftImage />}
            <Content isMobile={props.isMobile}>
                <AboutText isMobile={props.isMobile} />
                <div />
                <div />
                <Video isMobile={props.isMobile} />
            </Content>
            <MusicWrapper isMobile={props.isMobile}>
                <SoundCloud isMobile={props.isMobile} />
            </MusicWrapper>
        </Wrapper>

    </>
    )
}

export default memo(About)