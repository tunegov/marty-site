import React from 'react'
import Plx from 'react-plx';

import { RightImage } from '../../styled/About'

import aboutRight from '../../resources/aboutRight.png'

const parallaxData = [
    {
        start: 0,
        end: 1200,
        properties: [
            {
                startValue: 0,
                endValue: -250,
                property: 'translateY',
            },
            {
                startValue: 150,
                endValue: 0,
                property: 'translateX',
            },
        ],
    },
];

const Image = () => {
    return (
        <Plx parallaxData={parallaxData}>
            <RightImage src={aboutRight} />
        </Plx>
    )
}

export default Image