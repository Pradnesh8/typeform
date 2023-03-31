import React, { useCallback, useEffect, useRef, useState } from 'react'
import Question from './Question'
import QuestionContext from '../utils/QuestionContext';

const Body = () => {
    const [qno, setQno] = useState(0);
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
    // useEffect(() => {
    //     const i = setTimeout(() => {
    //         setQno(0);
    //     }, 300)
    //     return () => {
    //         clearTimeout(i);
    //     }
    // }, [qno]);
    return (
        // TODO on scroll update question && check if response given is valid
        <QuestionContext.Provider value={{
            qno,
            setQno
        }}>
            <div className='main-wrapper'>
                <Question type="agreement" />
                <Question type="text" />
                <Question type="text2" />
                <Question type="dropdown" />
                <Question type="option" />
                <Question type="multi-option" />
                <Question type="multi-option2" />
                <Question type="email" />
                <Question type="phone" />
            </div>
        </QuestionContext.Provider>
    )
}

export default Body