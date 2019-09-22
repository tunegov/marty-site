import React, { memo } from 'react'

import { Link, Icon } from '../../styled/Social'

const SocialIcon = ({ src, href }) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon alt="icon" src={src} />
        </Link>
    )
}

export default memo(SocialIcon)