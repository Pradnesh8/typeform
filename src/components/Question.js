import React from 'react'

const Agreement = () => {
    return (
        <div className='sub-container'>
            <div className='question-container'>
                <section className='content'>
                    <div className='header-text'>Up-skilling requires time commitment</div>
                    <div className="sub-content-1">
                        The GrowthX experience is designed by keeping in mind the working hours founders & full time operators typically work in.
                    </div>
                    <div className="sub-content-2">
                        <span>You will spend</span>
                        <ul className='points'>
                            <li>6 hours/week for the first 5 weeks</li>
                            <li>15 hours/week for the last 3 weeks</li>
                        </ul>
                    </div>
                </section>
                <section className='actions'>
                    <button className='cta-btn'>I agree</button>
                    <div className='cta-text'>press <b>Enter ↵</b></div>
                </section>
            </div>
        </div>
    )
}
const TextQuestion = ({ qno }) => {
    return (
        <div className='sub-container'>
            <div className='question-container'>
                <section className='content'>
                    <div className='header-text'>
                        <span>{qno} →</span>
                        <span>What's your first name? *</span>
                    </div>
                    <div className="sub-content-1">
                        <input type="text" name="name" id="name" autoComplete='name' className='input-text-field' />
                    </div>
                </section>
                <section className='actions'>
                    <button className='cta-btn'>OK ✓</button>
                    <div className='cta-text'>press <b>Enter ↵</b></div>
                </section>
            </div>
        </div>
    )
}
const Question = ({ type, qno }) => {
    switch (type) {
        case "agreement":
            return <Agreement />
        case "text":
            return <TextQuestion qno={qno} />
    }
}

export default Question