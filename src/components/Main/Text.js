import React, { memo } from 'react'

import {
    TextBlock,
    NumberText,
    ConcertText,
    NumberBlock,
    ContactText,
    InfoBlock,
    InfoText,
    NumberIcon
} from '../../styled/Main'

import {
    PHONE,
    CONTACT_TEXT,
    INFO_1,
    INFO_2,
    INFO_3,
} from '../../constants/info'

import concertText from '../../resources/concertText.png'
import phoneIcon from '../../resources/phoneIcon.png'

const TextMain = (props) => {
    return (
        <TextBlock isMobile={props.isMobile}>
            <ConcertText isMobile={props.isMobile} src={concertText} />
            <ContactText isMobile={props.isMobile}>{CONTACT_TEXT}</ContactText>
            <NumberBlock isMobile={props.isMobile}>
                <svg width="400" height="102" viewBox="0 0 400 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 2H398V100H2V51" stroke="url(#paint0_linear)" stroke-width="4" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="2" x2="393.079" y2="139.859" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2D2461" />
                            <stop offset="1" stop-color="#05E3C8" />
                        </linearGradient>
                    </defs>
                </svg>
                <NumberText isMobile={props.isMobile} href={`tel:${PHONE}`}>
                    <NumberIcon src={phoneIcon} isMobile={props.isMobile} />
                    {PHONE}
                </NumberText>
            </NumberBlock>
            <InfoBlock isMobile={props.isMobile}>
                <InfoText isMobile={props.isMobile}>{INFO_1}</InfoText>
                <InfoText isMobile={props.isMobile} border>{INFO_2}</InfoText>
                <InfoText isMobile={props.isMobile}>{INFO_3}</InfoText>
            </InfoBlock>
        </TextBlock>
    )
}

export default memo(TextMain)