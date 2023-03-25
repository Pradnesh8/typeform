import React from 'react'

const Question = () => {
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

export default Question