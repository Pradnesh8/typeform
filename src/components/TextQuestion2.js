import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';
const TextQuestion2 = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [error, setError] = useState('');
    const [secName, setSecName] = useState(formData['lastName'] ? formData['lastName'] : '');
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (secName.length === 0) {
            setProgress(Math.round(1 / 7 * 100));
            setError("Please fill this in");
            setQno(2);
        } else {
            setQno(3)
            const form = formData
            form["lastName"] = secName;
            setFormData({ ...formData, ...form });
            setProgress(Math.round(2 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'} id='q2'>
                    <form onSubmit={handleSubmit}>
                        <div className='question-container'>
                            <section className='content'>
                                <div className='header-text'>
                                    <span className='qno-text'>2 →</span>
                                    <span>What's your last name, {formData["name"]}? *</span>
                                </div>
                                <div className="sub-content-1">
                                    <input type="text" name="secname" onChange={(e) => setSecName(e.target.value)} placeholder="Type your answer here" id="secname" autoComplete='name' className='input-text-field' value={secName} />
                                </div>
                                {
                                    (error.length > 0 && secName.length === 0) &&
                                    <ErrorAlert errMsg={error} />
                                }
                            </section>
                            <section className='actions'>
                                <button className='cta-btn' type='submit' onClick={handleSubmit}>OK ✓</button>
                                <div className='cta-text'>press <b>Enter ↵</b></div>
                            </section>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default TextQuestion2