import "./App.css";
import Santa from "./photos/santa.png";
import { useState } from "react";

function App() {
    const [santaVisibility, setSantaVisibility] = useState(false);
    const [wiggle, setWiggle] = useState(false);
    const showSanta = () => {
        setSantaVisibility(!santaVisibility);

        setTimeout(() => {
            setWiggle(true);
        }, 1000);

        setTimeout(() => {
            setWiggle(false);
            setSantaVisibility(false);
        }, 2000);
    };

    return (
        <>
            <div className="bg-image"></div>
            <button onClick={showSanta}>Marry Christmas!</button>
            <img
                id="santa"
                className={`${santaVisibility ? "" : "hidden"} ${
                    wiggle ? "wiggle" : ""
                }`}
                src={Santa}
                alt="Santa Claus"
            />
        </>
    );
}

export default App;
