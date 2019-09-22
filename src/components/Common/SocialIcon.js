import React, { memo } from 'react'

import { Link, Icon } from '../../styled/Social'

const SocialIcon = ({ src, href, isMobile }) => {
    return (
        <Link isMobile={isMobile} href={href} target="_blank" rel="noopener noreferrer">
            <Icon alt="icon" src={src} isMobile={isMobile} />
        </Link>
    )
}

export default memo(SocialIcon)