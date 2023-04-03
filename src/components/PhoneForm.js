import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import CountryDropdown from './CountryDropdown';
import ErrorAlert from './ErrorAlert';

const PhoneForm = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [error, setError] = useState("");
    const [animate, setAnimate] = useState(false);
    const [phone, setPhone] = useState("");
    const [selector, setSelector] = useState(false);
    const { countryName } = useContext(QuestionContext);
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSubmit = () => {
        if (phone.length === 0) {
            setError("Please fill this in");
        }
        else if (!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/).test(phone) || phone.length > 15 || phone.length < 10) {
            setError("Hmm... that phone number doesn't look right");
        }
        else {
            setQno(prevQue => prevQue + 1)
            const form = formData
            form["phone"] = phone;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(7 / 7 * 100));
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
                                <span className='qno-text'>7 →</span>
                                <span>Your phone number *</span>
                            </div>
                            <div className="sub-content-2 drop-sub-content-2">
                                We won't call you unless it is absolutely required to process your application.
                            </div>
                            <div className="sub-content-1 sub-content-1-phone">
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" fullWidth /> */}
                                {
                                    !selector ?
                                        <div className='country-selected' onClick={() => setSelector(true)}>
                                            <img
                                                src={"https://flagcdn.com/20x15/" + countryName + ".png"}
                                                srcSet={"https://flagcdn.com/40x30/" + countryName + ".png 2x,https://flagcdn.com/60x45/" + countryName + ".png 3x"}
                                                width="20"
                                                height="15"
                                                className='country-flag'
                                                alt={"country"} />
                                            <span id='drop-icon'>⋁</span>
                                        </div> :
                                        <div className='country-dropdown'>
                                            <CountryDropdown handleSelect={setSelector} />
                                        </div>
                                }
                                {
                                    !selector &&
                                    <input type="tel" name="name" onChange={(e) => {
                                        const re = /^[0-9\b]+$/;
                                        if (e.target.value === '' || re.test(e.target.value)) {
                                            setPhone(e.target.value);
                                            setError("");
                                        }
                                    }} placeholder="081234 56789" id="name" autoComplete='tel-national' className='input-text-field phone-field' value={phone} />
                                }
                            </div>
                            {
                                error.length > 0 &&
                                <ErrorAlert errMsg={error} />
                            }
                        </section>
                        <section className='actions submit-actions'>
                            <button className='cta-btn cta-btn-submit' onClick={handleSubmit}>Submit</button>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default PhoneForm