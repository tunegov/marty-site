import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { PHONE } from '../constants/info'
import { Wrapper, FooterSection } from '../styled/Footer'
import Phone from '../styled/Phone'
import Social from '../components/Common/Social'
import DesignerLogo from '../components/Footer/DesignerLogo'

const Footer = () => {
    return (
        <Wrapper>
            <FooterSection left>
                <DesignerLogo />
            </FooterSection>
            <FooterSection>
                <Phone href={`tel:${PHONE}`}>{PHONE}</Phone>
            </FooterSection>
            <FooterSection right>
                <Social width="null" />
            </FooterSection>
        </Wrapper>
    )
}

export default memo(Footer)