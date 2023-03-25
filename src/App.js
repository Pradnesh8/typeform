import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Progress from "./components/progress";
const App = () => {
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
        <>
            <Progress />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);