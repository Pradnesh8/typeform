import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../utils/QuestionContext';
import { industryList } from '../utils/helper';
import CountryDropdown from './CountryDropdown';
import AppContext from '../utils/AppContext';
import ErrorAlert from './ErrorAlert';

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
    const handleSubmit = () => {
        setQno(prevQue => prevQue + 1);
    }
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
                    <button className='cta-btn' onClick={handleSubmit}>I agree</button>
                    <div className='cta-text'>press <b>Enter ↵</b></div>
                </section>
            </div>
        </div>
    )
}
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
const TextQuestion2 = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [error, setError] = useState('');
    const [secName, setSecName] = useState('');
    useEffect(() => {
        const i = setTimeout(() => {
            qno === 1 && setAnimate(true);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    const handleSubmit = () => {
        if (secName.length === 0) {
            setError("Please fill this in");
        } else {
            setQno(prevQue => prevQue + 1)
            const form = formData
            form["lastName"] = secName;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(2 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
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
                            <button className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                            <div className='cta-text'>press <b>Enter ↵</b></div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}
const DropdownQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [drop, setDrop] = useState(false);
    const [industry, setIndustry] = useState("");
    const [search, setSearch] = useState("");
    const [error, setError] = useState('');
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
    }, [search]);
    const handleReset = () => {
        setSearch("");
        setIndustry("");
        setDrop(true);
    }
    const handleSelect = (industryName) => {
        setSearch(industryName);
        setIndustry(industryName);
        setDrop(false);
    }
    const handleSubmit = () => {
        if (industry.length === 0) {
            setError("Oops! Please make a selection");
        } else {
            setQno(prevQue => prevQue + 1)
            const form = formData
            form["industry"] = industry;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(3 / 7 * 100));
            setError("");
        }
    }
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container dropdownq'}>
                    <div className='question-container'>
                        <section className='content'>
                            <div className='header-text'>
                                <span className='qno-text'>3 →</span>
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
                                            <span className='drop-icon' onClick={handleReset}>×</span> :
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
                                            return <button className='options' key={industryName + index} onClick={() => handleSelect(industryName)}>{industryName}</button>
                                        })
                                    }
                                </div>
                            </div>
                            {
                                (error.length > 0 && industry.length === 0) &&
                                <ErrorAlert errMsg={error} />
                            }
                        </section>
                        {
                            !drop &&
                            <section className='actions'>
                                <button className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                            </section>
                        }
                    </div>
                </div>
            }
        </>
    )
}

const OptionQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [enableText, setEnableText] = useState(false);
    const [otherRole, setOtherRole] = useState("");
    const [role, setRole] = useState("");
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
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(3 / 7 * 100));
            setRole("");
        } else {
            const form = formData
            form["role"] = roleName;
            setFormData({ ...formData, ...form });
            console.log("ss", Math.round(qno + 1 / 7 * 100));
            setProgress(Math.round(4 / 7 * 100));
            setError("");
            setRole(roleName);
        }
    }
    const changeOtherRole = (event) => {
        if (otherRole.length === 0) {
            alert("Please enter role !");
        }
        setEnableText(false);
        handleSelect(otherRole);
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
    const handleSubmit = () => {
        if (role.length === 0) {
            setError("Oops! Please make a selection");
        } else {
            setQno(prevQue => prevQue + 1)
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
                <div className={'sub-container'} onKeyPress={(e) => handleKeyPress(e)}>
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
                                <div className={formData["role"] === 'Founder or CXO' ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Founder or CXO")}>
                                    <span className='role-opt-btn-key'>A</span>
                                    <span className='role-opt-text'>Founder or CXO</span>
                                </div>
                                <div className={formData["role"] === "Product team" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Product team")}>
                                    <span className='role-opt-btn-key'>B</span>
                                    <div>Product team</div>
                                </div>
                                <div className={formData["role"] === "Marketing team" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("Marketing team")}>
                                    <span className='role-opt-btn-key'>C</span>
                                    <div className='role-opt-text'>Marketing team</div>
                                </div>
                                <div className={formData["role"] === "VC" ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect("VC")}>
                                    <span className='role-opt-btn-key'>D</span>
                                    <div className='role-opt-text'>VC</div>
                                </div>
                                <div className={formData["role"] === otherRole ? 'role-opt selected-option' : 'role-opt'} onClick={() => setEnableText(true)} >
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
                            <button className='cta-btn' onClick={handleSubmit}>OK ✓</button>
                        </section>
                    </div >
                </div >
            }
        </>
    )
}
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
                form["goals"].length === 2 ? setProgress(Math.round(5 / 7 * 100)) : setProgress(Math.round(4 / 7 * 100));
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
    }, [formData])
    return (
        <>
            {
                /*+ (qno >= 2 && animate && 'sub-container-visible')*/
                <div className={'sub-container'}>
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
                                        return <div className={formData["goals"]?.includes(goal) ? 'role-opt selected-option' : 'role-opt'} onClick={() => handleSelect(goal)}>
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
                            <button className='cta-btn' onClick={() => setQno(prevQue => prevQue + 1)}>OK ✓</button>
                        </section>
                    </div>
                </div >
            }
        </>
    )
}
const EmailForm = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
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
        }
        else {
            setQno(prevQue => prevQue + 1)
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
                <div className={'sub-container'}>
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
                                }} name="name" placeholder="name@example.com" id="name" autoComplete='name' className='input-text-field' value={email} />
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
        else if (!(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/).test(phone) || phone.length > 15) {
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
        case "email":
            return <EmailForm />
        case "phone":
            return <PhoneForm />
    }
}

export default Question