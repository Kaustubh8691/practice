import React from 'react'
import Featurebox from './Featurebox'
import imges1 from '../images/1.svg'
import img2 from '../images/2.svg'
import img3 from '../images/3.svg'
import img4 from '../images/4.svg'

export default function Feature() {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox data={imges1} title="Weight Lifting" />
                <Featurebox data={img2} title="specific Muscle " />
                <Featurebox data={img3} title="Flex your muscle" />
                <Featurebox data={img4} title="cardio exercise" />
            </div>

        </div>
    )
}
