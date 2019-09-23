import React, { memo, useState, useEffect } from 'react'

import { TextWrapper, TextBlock, TextTitle } from '../../styled/About'

const AboutText = (props) => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const updateDimensions = () => {
        const width = window.innerWidth * 0.45
        setWidth(width)
        setHeight(width / 1.9)
    }

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
    })


    return (
        <TextBlock isMobile={props.isMobile}>
            {!props.isMobile &&
                <svg width={width} height={height} viewBox={`0 0 738 383`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path d="M731 187.5V3H7V372H188" stroke="#ADFDF3" stroke-width="5" />
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0.5" y="0.5" width="738" height="383" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
            }

            <TextWrapper isMobile={props.isMobile}>
                <TextTitle isMobile={props.isMobile}>
                    О СОБЫТИИ
                </TextTitle>
                <b>Marty</b> - бывший участник <b>БРДК</b> и творческого объединения <b>“Стольный град“</b>, смело сочетающий в своей музыке ламповый звук акустической гитары, ритмы классического хип-хопа и современной поп-музыки, после множества концертов и всеукраинского тура в составе коллективов, впервые попробует самостоятельно покорить живым исполнением сердца меломанов столицы! Что из этого выйдет? Ты сможешь узнать <b>22 ноября</b> в стенах <b>Volume club</b> по адресу <b>г.Киев, ул.Гарматная, 26/2! Начало в 19:00</b>
            </TextWrapper>
        </TextBlock>
    )
}

export default AboutText