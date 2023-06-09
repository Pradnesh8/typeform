import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Progress from "./components/Progress";
import growthXLogo from './../assets/growthX-full-logo.png';
import AppContext from "./utils/AppContext";

const App = () => {
    const [progress, setProgress] = useState(0);
    /**
     * Progress bar
     * MainContent
     *      Content/Question
     *      Answer field
     *      Button [OK] press Enter
     * (Each question on new page/component on Scroll or on Button press or on Click "Ok")
     * (On each question answered progress bar increases by some percentage)
     */

    /**
     * Layout
     * 
     * App
     *  - Progress
     *  - Body
     *      - Logo
     *      - Question [Scroll]
     *          - Question Text
     *          - Answer [Textfield/Select Box]
     *          - Button [Ok/Submit]
     */
    return (
        <AppContext.Provider value={{ progress, setProgress }}>
            <div className="container">
                <div className="header-block">
                    <Progress />
                    <div className='head'>
                        <img className='logo' src={growthXLogo} alt="logo" />
                    </div>
                </div>
                <Body />
            </div>
        </AppContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);