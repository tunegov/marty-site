import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { PHONE } from '../constants/info'
import { Wrapper, FooterSection } from '../styled/Footer'
import Phone from '../styled/Phone'
import Social from '../components/Common/Social'
import DesignerLogo from '../components/Footer/DesignerLogo'
import Support from '../components/Footer/Support'

const Footer = (props) => {
    return (
        <>
            <Support isMobile={props.isMobile} />
            <Social hide={!props.isMobile} isMobile={props.isMobile} soundCloud width="null" />
            <Wrapper isMobile={props.isMobile}>
                <FooterSection left isMobile={props.isMobile} hide={props.isMobile}>
                    {/* <DesignerLogo /> */}
                </FooterSection>
                <FooterSection isMobile={props.isMobile} >
                    <Phone isMobile={props.isMobile} href={`tel:${PHONE}`}>{PHONE}</Phone>
                </FooterSection>
                <FooterSection right hide={props.isMobile} >
                    {/* <Social isMobile={props.isMobile} width="null" /> */}
                </FooterSection>
            </Wrapper>
        </>
    )
}

export default memo(Footer)