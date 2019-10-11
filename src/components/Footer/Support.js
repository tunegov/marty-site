import React, { memo, useEffect, useState, useRef } from 'react'

import {
    IconFixed,
    Wrapper,
    IconBig,
    Icon,
    IconWrapper,
    Text,
    IconBack
} from '../../styled/Support'
import {
    designerUrl,
    customWearUrl,
    supportText,
    bndUrl
} from '../../constants/info'

import logoDesigner from '../../resources/logoDesigner.png'
import customWear from '../../resources/customWear.png'
import lintreeLogo from '../../resources/linktree.png'

const Support = (props) => {
    const [animate, setAnimate] = useState(false)

    useInterval(() => {
        setAnimate(!animate)
    }, 5000)

    return (
        <>
            <Wrapper isMobile={props.isMobile}>
                <Text>
                    {supportText}
                </Text>
                <IconWrapper href={designerUrl} target="_blank" rel="noopener noreferrer">
                    <Icon
                        src={logoDesigner}
                    />
                </IconWrapper>
                <IconWrapper href={customWearUrl} target="_blank" rel="noopener noreferrer">
                    <Icon
                        src={customWear}
                    />
                </IconWrapper>
            </Wrapper>
            <IconFixed
                isMobile={props.isMobile}
                href={bndUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="text">Слушать</div>
                <IconBack
                    animate={animate}
                    isMobile={props.isMobile}
                >
                    <IconBig
                        isMobile={props.isMobile}
                        src={"https://band.link/_nuxt/img/1bf7e37.svg"}
                    />
                </IconBack>
            </IconFixed>
        </>
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default memo(Support)