import React from 'react'
import Question from './Question'
import growthXLogo from './../../assets/growthX-full-logo.png';

const Body = () => {
    return (
        <div>
            <div className='head'>
                <img className='logo' src={growthXLogo} alt="logo" />
            </div>
            <Question />
        </div>

    )
}

export default Body