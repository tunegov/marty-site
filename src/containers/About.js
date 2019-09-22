import React, { memo } from 'react'
import Plx from 'react-plx';

import AboutText from '../components/About/AboutText'
import LeftImage from '../components/About/LeftImage'
import RightImage from '../components/About/RightImage'
import Video from '../components/About/Video'

import { Wrapper, Content } from '../styled/About'

const About = () => {
    return (
        <Wrapper>
            <RightImage />
            <LeftImage />
            <Content>
                <AboutText />
                <div />
                <div />
                <Video />
            </Content>
        </Wrapper>
    )
}

export default memo(About)