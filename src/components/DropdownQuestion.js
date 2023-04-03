import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../utils/AppContext';
import { industryList } from '../utils/helper';
import QuestionContext from '../utils/QuestionContext';
import ErrorAlert from './ErrorAlert';


const DropdownQuestion = () => {
    const { qno, setQno, formData, setFormData } = useContext(QuestionContext);
    const { setProgress } = useContext(AppContext);
    const [animate, setAnimate] = useState(false);
    const [drop, setDrop] = useState(false);
    const [industry, setIndustry] = useState(formData['industry'] ? formData['industry'] : '');
    const [search, setSearch] = useState(formData['industry'] ? formData['industry'] : '');
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
            setProgress(Math.round(2 / 7 * 100));
            setError("Oops! Please make a selection");
            setQno(3);
        } else {
            setQno(4)
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
                <div className={'sub-container dropdownq'} id='q3'>
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

export default DropdownQuestion