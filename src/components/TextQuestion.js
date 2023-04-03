import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';

const TextQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSubmit = () => {
        if (name.length === 0) {
            setProgress(0);
            setError("Please fill this in");
        } else {
            setQno(prevQue => prevQue + 1);
            const form = formData
            form["name"] = name;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(1 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 1 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span className='qno-text'>1 →</span>
                                <span>What's your first name? *</span>
                            </div>
                            <div className="sub-content-1">
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" fullWidth /> */}
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Type your answer here" id="name" autoComplete='name' className='input-text-field' value={name} />
                            </div>
                            {
                                (error.length > 0 && name.length === 0) &&
                                <ErrorAlert errMsg={error} />
                            }
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                            <div className='cta-text'>press <b>Enter ↵</b></div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default TextQuestion