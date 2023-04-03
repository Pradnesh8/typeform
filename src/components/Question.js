import React from 'react';
import Agreement from './Agreement';
import TextQuestion from './TextQuestion';
import TextQuestion2 from './TextQuestion2';
import DropdownQuestion from './DropdownQuestion';
import OptionQuestion from './OptionQuestion';
import MultiOptionQuestion from './MultiOptionQuestion';
import EmailForm from './EmailForm';
import PhoneForm from './PhoneForm';

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