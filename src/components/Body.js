import React, { useEffect, useState } from 'react'
import Question from './Question'

const Body = () => {
    const [qno, setQno] = useState();
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
        const i = setTimeout(() => {
            setQno(0);
        }, 300)
        return () => {
            clearTimeout(i);
        }
    }, [qno]);
    return (
        // TODO on scroll update question && check if response given is valid
        <div className='main-wrapper'>
            <Question type="agreement" qno={qno} />
            <Question type="text" qno={1} />
            <Question type="text" qno={2} />
            <Question type="dropdown" qno={3} />
            <Question type="option" qno={4} />
            <Question type="multi-option" qno={5} />
            <Question type="multi-option" qno={6} />
            <Question type="email" qno={7} />
            <Question type="phone" qno={8} />
        </div>
    )
}

export default Body