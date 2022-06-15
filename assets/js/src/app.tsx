import { h } from 'preact'
import { useState } from 'preact/hooks'

export default function App() {
    const [counter, setCounter] = useState(0);
    const handleButtonClick = () => {
        setCounter((prev) => prev + 1);
    }
    return (
        <div className="preact-page">
            <div>
                The button has been clicked <span className="counter">{counter}</span> times!
            </div>
            <button onClick={handleButtonClick}>Click me!</button>
        </div>
    )
}