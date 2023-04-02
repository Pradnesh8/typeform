import React, { useContext } from 'react'
import AppContext from '../utils/AppContext'

const Progress = () => {
    const { progress } = useContext(AppContext);
    return (
        <div className='progress-bar'>
            {/* progress indicator */}
            <div className='progress' style={{ width: `${progress}%` }}></div>
        </div >
    )
}

export default Progress