import { TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../utils/QuestionContext';
const Agreement = () => {
    const { qno, setQno } = useContext(QuestionContext);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const i = setTimeout(() => {
            setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, []);
    return (
        <div className={'sub-container ' + (qno === 0 && animate && 'sub-container-visible')}>
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
                    <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>I agree</button>
                    <div className='cta-text'>press <b>Enter ↵</b></div>
                </section>
            </div>
        </div>
    )
}
const TextQuestion = () => {
    const { qno, setQno } = useContext(QuestionContext);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    return (
        <>
            {console.log("asdasd")}
            {
                qno === 1 &&
                <div className={'sub-container ' + (qno === 1 && animate && 'sub-container-visible')}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>{qno} →</span>
                                <span>What's your first name? *</span>
                            </div>
                            <div className="sub-content-1">
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" fullWidth /> */}
                                <input type="text" name="name" id="name" autoComplete='name' className='input-text-field' />
                            </div>
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                            <div className='cta-text'>press <b>Enter ↵</b></div>
                        </section>
                    </div>
                </div>
            }
            {
                qno === 2 &&
                <div className={'sub-container ' + (qno === 2 && animate && 'sub-container-visible')}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>{qno} →</span>
                                <span>What's your last name? *</span>
                            </div>
                            <div className="sub-content-1">
                                <input type="text" name="name" id="name" autoComplete='name' className='input-text-field' />
                            </div>
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                            <div className='cta-text'>press <b>Enter ↵</b></div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}
const Question = ({ type }) => {

    switch (type) {
        case "agreement":
            return <Agreement />
        case "text":
            return <TextQuestion />
    }
}

export default Question