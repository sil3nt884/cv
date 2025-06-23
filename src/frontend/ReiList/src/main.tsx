import React from 'react';
import CV from './cv.tsx'
import ReactDOM from "react-dom/client";
function Main() {


    return (
        <>
            <CV></CV>
        </>
    )
}

export default Main

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);