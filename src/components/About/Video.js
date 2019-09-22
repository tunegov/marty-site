import React from 'react'

import { VideoWrapper } from '../../styled/About'

const Video = ({ isMobile }) => {
    return (
        <VideoWrapper isMobile={isMobile} frameBorder="0" src="https://www.youtube.com/embed/REQehnnSKc0?controls=1&modestbranding=0&showinfo=0&rel=0&iv_load_policy=3&color=black" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoWrapper>
    )
}

export default Video
