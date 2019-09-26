import React from 'react'

import { VideoWrapper } from '../../styled/About'

const Video = ({ isMobile }) => {
    return (
        <>
            <VideoWrapper isMobile={isMobile} frameBorder="0" src="https://www.youtube.com/embed/REQehnnSKc0?controls=1&modestbranding=0&showinfo=0&rel=0&iv_load_policy=3&color=black" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></VideoWrapper>
            {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/338993886&color=%23050406&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> */}
        </>
    )
}

export default Video
