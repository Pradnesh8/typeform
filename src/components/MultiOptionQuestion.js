import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';

const MultiOptionQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [error, setError] = useState("");
    const [animate, setAnimate] = useState(false);
    const [goals, setGoals] = useState([]);
    const [selGoals, setSelGoals] = useState([]);
    const alpha = ['A', 'B', 'C', 'D', 'E'];
    const RoleGoals = {
        "Founder or CXO": [
            "Structured approach to growth",
            "Build a growth team",
            "Connect with like - minded people"
        ],
        "Other": [
            "Get hired",
            "Get promoted",
            "Connect with like - minded people",
            "Structured approach to growth",
            "Build a growth team"
        ]
    }
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSelect = (_goal) => {
        const form = formData
        if (form["goals"] && form["goals"].includes(_goal)) {
            setQno(5);
            if (form['goals'].includes(_goal)) {
                form['goals'] = form['goals'].filter(g => g !== _goal);
                if (form['goals'].length === 0) {
                    delete form['goals']
                    setSelGoals([]);
                } else {
                    setSelGoals(form['goals']);
                }
            }
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(4 / 7 * 100));
            setError("");
        } else {
            if (form["goals"]?.length === 2) {
                setError("Only 2 options can be selected");
            } else {
                const form = formData
                form["goals"] ? form["goals"].push(_goal) : form["goals"] = [_goal];
                setFormData({ ...formData, ...form });
                console.log("ss", Math.round(qno + 1 / 7 * 100));
                if (form["goals"].length === 2) {
                    setProgress(Math.round(5 / 7 * 100))
                } else {
                    setProgress(Math.round(4 / 7 * 100));
                    setQno(5);
                }
                setError("");
                setSelGoals(form["goals"]);
            }
        }
    }
    const getGoals = () => {
        if (formData['role'] === 'Founder or CXO') {
            setGoals(RoleGoals['Founder or CXO']);
        } else {
            setGoals(RoleGoals['Other']);
        }
    }
    useEffect(() => {
        getGoals();
    }, [formData]);
    const handleSubmit = () => {
        const form = formData
        if (form["goals"]?.length !== 2) {
            setError("Oops! Please make a selection");
            setQno(5);
        } else {
            console.log("next");
            setQno(6)
        }
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'} id="q5">
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span className='qno-text'>5 →</span>
                                <span>Johb, what's your professional goal for the next 12 months? *</span>
                            </div>
                            {
                                selGoals.length != 2 &&
                                <div className="multi-drop-selected">
                                    Choose {2 - selGoals.length}
                                </div>
                            }
                            <div className='options multi-options'>
                                {
                                    goals.map((goal, index) => {
                                        return <div key={crypto.randomUUID()} className={formData["goals"]?.includes(goal) ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect(goal)}>
                                            <span className='role-opt-btn-key'>{alpha[index]}</span>
                                            <span className='role-opt-text'>{goal}</span>
                                        </div>
                                    })
                                }
                            </div>
                            {
                                (error.length > 0 && goals.length >= 0) &&
                                <ErrorAlert errMsg={error} />
                            }
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                        </section>
                    </div>
                </div >
            }
        </>
    )
}

export default MultiOptionQuestion