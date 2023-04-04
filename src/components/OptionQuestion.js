import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';


const OptionQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [enableText, setEnableText] = useState(false);
    const [otherRole, setOtherRole] = useState("");
    const [role, setRole] = useState(formData['role'] ? formData['role'] : '');
    const [keyPressed, setKeyPressed] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSelect = (roleName) => {
        if (roleName === role) {
            const form = formData
            delete form['role']
            setFormData({ ...formData, ...form });
            setQno(4);
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(3 / 7 * 100));
            setRole("");
        } else {
            const form = formData
            form["role"] = roleName;
            form["goals"] = [];
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(4 / 7 * 100));
            setError("");
            setRole(roleName);
        }
    }
    const changeOtherRole = (event) => {
        if (otherRole.length === 0) {
            setError("Please enter role !");
        }
        setEnableText(false);
        handleSelect(otherRole);
        event.stopPropagation()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (role.length === 0) {
            setError("Oops! Please make a selection");
            setQno(4);
        } else {
            setQno(5)
            const form = formData
            form["role"] = role;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(4 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'} id="q4">
                    <form onSubmit={handleSubmit}>
                        <div className='question-container'>
                            <section className='content'>
                                <div className='header-text'>
                                    <span className='qno-text'>4 →</span>
                                    <span>Your role in your company? *</span>
                                </div>
                                <div className="sub-content-2 drop-sub-content-2">
                                    We want to understand how you spend your time right now.
                                </div>
                                <div className='options role-options'>
                                    <div key={'founderRole'} className={formData["role"] === 'Founder or CXO' ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Founder or CXO")}>
                                        <span className='role-opt-btn-key'>A</span>
                                        <span className='role-opt-text'>Founder or CXO</span>
                                    </div>
                                    <div key={'productteamRole'} className={formData["role"] === "Product team" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Product team")}>
                                        <span className='role-opt-btn-key'>B</span>
                                        <div>Product team</div>
                                    </div>
                                    <div key={'marketingRole'} className={formData["role"] === "Marketing team" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Marketing team")}>
                                        <span className='role-opt-btn-key'>C</span>
                                        <div className='role-opt-text'>Marketing team</div>
                                    </div>
                                    <div key={'vcRole'} className={formData["role"] === "VC" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("VC")}>
                                        <span className='role-opt-btn-key'>D</span>
                                        <div className='role-opt-text'>VC</div>
                                    </div>
                                    <div key={'otherrole'} className={formData["role"] === otherRole ? 'role-opt selected-option' : 'role-opt'} onClick={() => setEnableText(true)} >
                                        {!enableText && <span className='role-opt-btn-key'>E</span>}
                                        <div className='role-opt-text'>
                                            {
                                                enableText ?
                                                    <input type="text" className='input-text-field-role' onChange={(e) => setOtherRole(e.target.value)} name="role-other" id="role-other" value={otherRole} /> :
                                                    <span>{otherRole.length > 0 ? otherRole : "Other"}</span>
                                            }
                                        </div>
                                        {enableText && <span onClick={changeOtherRole} className='role-text-btn-submit'>✓</span>}
                                    </div>
                                </div>
                                {
                                    (error.length > 0 && role.length === 0) &&
                                    <ErrorAlert errMsg={error} />
                                }
                            </section>
                            <section className='actions'>
                                <button type='submit' className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                            </section>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default OptionQuestion