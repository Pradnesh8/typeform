import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';

const EmailForm = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState(formData['email'] ? formData['email'] : '');
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSubmit = () => {
        if (email.length === 0) {
            setError("Please fill this in");
        }
        else if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
            setError("Hmm... that email doesn't look right");
            setQno(6);
        }
        else {
            setQno(7);
            const form = formData
            form["email"] = email;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(6 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 1 && animate && 'sub-container-visible')*/
                <div className={'sub-container'} id="q6">
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span className='qno-text'>6 →</span>
                                <span>Email you'd like to register with? *</span>
                            </div>
                            <div className="sub-content-2 drop-sub-content-2">
                                We will personalize your learning experience accordingly
                            </div>
                            <div className="sub-content-1">
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" fullWidth /> */}
                                <input type="text" onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }} name="name" placeholder="name@example.com" id="name" autoComplete='email' className='input-text-field' value={email} />
                            </div>
                            {
                                error.length > 0 &&
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

export default EmailForm