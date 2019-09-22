import React from 'react'
import Plx from 'react-plx';

import { LeftImage } from '../../styled/About'

import aboutLeft from '../../resources/aboutLeft.png'

const parallaxData = [
    {
        start: 0,
        end: 1200,
        properties: [
            {
                startValue: 0,
                endValue: -300,
                property: 'translateY',
            },
            {
                startValue: -50,
                endValue: 0,
                property: 'translateX',
            },
        ],
    },
];

const Image = () => {
    return (
        <Plx
            parallaxData={parallaxData}
        >
            <LeftImage src={aboutLeft} />
        </Plx>
    )
}

export default Image