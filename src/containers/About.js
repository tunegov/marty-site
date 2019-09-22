import React, { memo } from 'react'
import Plx from 'react-plx';

import AboutText from '../components/About/AboutText'
import LeftImage from '../components/About/LeftImage'
import RightImage from '../components/About/RightImage'
import Video from '../components/About/Video'

import { Wrapper, Content } from '../styled/About'

const About = (props) => {
    return (
        <Wrapper isMobile={props.isMobile}>
            <RightImage isMobile={props.isMobile} />
            <LeftImage isMobile={props.isMobile} />
            <Content isMobile={props.isMobile}>
                <AboutText isMobile={props.isMobile} />
                <div />
                <div />
                <Video isMobile={props.isMobile} />
            </Content>
        </Wrapper>
    )
}

export default memo(About)