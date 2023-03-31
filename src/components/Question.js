import { TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../utils/QuestionContext';
import { industryList } from '../utils/helper';
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
        /*+ (qno === 0 && animate && 'sub-container-visible')*/
        <div className={'sub-container'}>
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
            {
                /*+ (qno >= 1 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>1 →</span>
                                <span>What's your first name? *</span>
                            </div>
                            <div className="sub-content-1">
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" fullWidth /> */}
                                <input type="text" name="name" placeholder="Type your answer here" id="name" autoComplete='name' className='input-text-field' />
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
const TextQuestion2 = () => {
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
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>2 →</span>
                                <span>What's your last name, John? *</span>
                            </div>
                            <div className="sub-content-1">
                                <input type="text" name="name" placeholder="Type your answer here" id="name" autoComplete='name' className='input-text-field' />
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
const DropdownQuestion = () => {
    const { qno, setQno } = useContext(QuestionContext);
    const [animate, setAnimate] = useState(false);
    const [drop, setDrop] = useState(false);
    const [industry, setIndustry] = useState("");
    const [search, setSearch] = useState("");
    const [filteredIndustryList, setFilteredIndustryList] = useState(industryList);
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const filterIndustry = () => {
        const filteredIndustries = industryList.filter(industry => industry.toLowerCase().includes(search.toLowerCase()));
        setFilteredIndustryList(filteredIndustries);
        search.length > 0 && industry === "" && setDrop(true);
    }
    useEffect(() => {
        const filter = setTimeout(() => {
            if (search !== industry) setDrop(true);
            filterIndustry()
        }, 500);
        return () => {
            clearTimeout(filter)
        }
    }, [search])
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container dropdownq'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>3 →</span>
                                <span>What industry is your company in? *</span>
                            </div>
                            <div className="sub-content-2 drop-sub-content-2">
                                We will personalize your learning experience accordingly
                            </div>
                            <div className="sub-content-1">
                                <div className='drop-input'>
                                    <input type="text" onChange={(e) => setSearch(e.target.value)} name="industry" id="industy" className='industry-dropdown' placeholder="Type or select an option" value={search} />
                                    {
                                        industry === search && search.length > 0 ?
                                            <span className='drop-icon' onClick={() => {
                                                setSearch("");
                                                setIndustry("");
                                                setDrop(true);
                                            }}>×</span> :
                                            (
                                                !drop ?
                                                    <span className='drop-icon' onClick={() => setDrop(true)}>∨</span>
                                                    :
                                                    <span className='drop-icon' onClick={() => setDrop(false)}>ʌ</span>
                                            )
                                    }
                                </div>
                                <div className='dropdown-list'>
                                    {
                                        drop &&
                                        filteredIndustryList.map((industryName, index) => {
                                            return <button className='options' key={industryName + index} onClick={() => {
                                                setSearch(industryName);
                                                setIndustry(industryName);
                                                setDrop(false);
                                            }
                                            }>{industryName}</button>
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                        {
                            !drop &&
                            <section className='actions'>
                                <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                            </section>
                        }
                    </div>
                </div>
            }
        </>
    )
}

const OptionQuestion = () => {
    const { qno, setQno } = useContext(QuestionContext);
    const [animate, setAnimate] = useState(false);
    const [enableText, setEnableText] = useState(false);
    const [otherRole, setOtherRole] = useState("");
    const [keyPressed, setKeyPressed] = useState("");
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const changeOtherRole = (event) => {
        if (otherRole.length === 0) {
            alert("Please enter role !");
        }
        setEnableText(false);
        event.stopPropagation()
    }
    const handleKeyPress = (event) => {
        console.log(event.key)
        setKeyPressed(event.key)
    }
    useEffect(() => {
        // TODO handle event listener
        // TODO select div as per keypress
        addEventListener("keypress", handleKeyPress);
        return () => removeEventListener("keypress", handleKeyPress);
    }, [])
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'} onKeyPress={(e) => handleKeyPress(e)}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>4 →</span>
                                <span>Your role in your company? *</span>
                            </div>
                            <div className="sub-content-2 drop-sub-content-2">
                                We want to understand how you spend your time right now.
                            </div>
                            <div className='options role-options'>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>A</span>
                                    <span className='role-opt-text'>Founder or CXO</span>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>B</span>
                                    <div>Product team</div>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>C</span>
                                    <div className='role-opt-text'>Marketing team</div>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>D</span>
                                    <div className='role-opt-text'>VC</div>
                                </div>
                                <div className='role-opt' onClick={() => setEnableText(true)}>
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
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                        </section>
                    </div>
                </div >
            }
        </>
    )
}
const MultiOptionQuestion = () => {
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
    const changeOtherRole = (event) => {
        if (otherRole.length === 0) {
            alert("Please enter role !");
        }
        setEnableText(false);
        event.stopPropagation()
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span>5 →</span>
                                <span>Johb, what's your professional goal for the next 12 months? *</span>
                            </div>
                            <div className="multi-drop-selected">
                                Choose 2
                            </div>
                            <div className='options multi-options'>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>A</span>
                                    <span className='role-opt-text'>Get hired</span>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>B</span>
                                    <div>Get promoted</div>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>C</span>
                                    <div className='role-opt-text'>Connect with like-minded people</div>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>D</span>
                                    <div className='role-opt-text'>Structured approach to growth</div>
                                </div>
                                <div className='role-opt'>
                                    <span className='role-opt-btn-key'>E</span>
                                    <div className='role-opt-text'>Build a growth team</div>
                                </div>
                            </div>
                        </section>
                        <section className='actions'>
                            <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                        </section>
                    </div>
                </div >
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
        case "text2":
            return <TextQuestion2 />
        case "dropdown":
            return <DropdownQuestion />
        case "option":
            return <OptionQuestion />
        case "multi-option":
            return <MultiOptionQuestion />
    }
}

export default Question