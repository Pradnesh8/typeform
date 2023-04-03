import React, { useEffect, useState } from 'react'
import QuestionContext from '../utils/QuestionContext';
import Agreement from './Agreement';
import TextQuestion from './TextQuestion';
import TextQuestion2 from './TextQuestion2';
import DropdownQuestion from './DropdownQuestion';
import OptionQuestion from './OptionQuestion';
import MultiOptionQuestion from './MultiOptionQuestion';
import EmailForm from './EmailForm';
import PhoneForm from './PhoneForm';
import ThankYou from './ThankYou';

const Body = () => {
    const [qno, setQno] = useState(0);
    const [countryName, setCountryName] = useState("in");
    const [formData, setFormData] = useState({});
    /**
     * Type of Question
     *  - Agreement 
     *  - Text based answer
     *  - Option based 
     *  - multioption based
     *  - Dropdown based
     *  - email
     *  - phone
     */
    useEffect(() => {
        const options = {
            behavior: 'smooth',
            block: 'center'
        };
        const i = setTimeout(() => {
            const q = `q${qno}`;
            document.getElementById(q)?.scrollIntoView(options);
            if (qno === 'done') {
                localStorage.removeItem('typeform')
            }
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);

    useEffect(() => {
        const data = localStorage.getItem('typeform');
        if (JSON.parse(data)?.name) {
            setFormData(JSON.parse(data));
            setQno(Object.keys(JSON.parse(data)).length);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('typeform', JSON.stringify(formData));
    }, [formData])

    return (
        // TODO on scroll update question && check if response given is valid
        <QuestionContext.Provider value={{
            qno,
            setQno,
            countryName,
            setCountryName,
            formData,
            setFormData
        }}>
            <div className='main-wrapper'>
                {
                    qno >= 0 &&
                    <Agreement />
                }
                {
                    qno > 0 &&
                    <TextQuestion />
                }
                {
                    qno > 1 &&
                    <TextQuestion2 />
                }
                {
                    qno > 2 &&
                    <DropdownQuestion />
                }
                {
                    qno > 3 &&
                    <OptionQuestion />
                }{
                    qno > 4 &&
                    <MultiOptionQuestion />
                }
                {
                    qno > 5 &&
                    <EmailForm />
                }
                {
                    qno > 6 &&
                    <PhoneForm />
                }
                {
                    qno === 'done' &&
                    <ThankYou />
                }
            </div>
        </QuestionContext.Provider>
    )
}

export default Body