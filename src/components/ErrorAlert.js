import React from 'react'

const ErrorAlert = ({ errMsg }) => {
    return (
        <div className="showError">
            <span className='icon-error'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    fill='#AF0404'
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    clipRule="evenodd"
                    viewBox="0 0 24 24"
                    style={{
                        height: "1rem",
                        width: "1rem"
                    }}
                >
                    <path
                        fillRule="nonzero"
                        d="M2.095 19.886l9.248-16.5a.753.753 0 011.313 0l9.248 16.5a.75.75 0 01-.656 1.116H2.752a.75.75 0 01-.657-1.116zm9.907-6.881a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75zm-.002-3a1 1 0 100 2 1 1 0 000-2z"
                    ></path>
                </svg></span>
            <span className='error-msg'>{errMsg}</span>
        </div>
    )
}

export default ErrorAlert