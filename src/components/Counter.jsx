import React, {useState} from 'react'

const Counter = function () {
    const [count, setCount] = useState(0); // отслеживание состояний

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return(
        <div className="Counter_contain">
        <h1 className="Counter_numb">{count} </h1>
            <div className="button_container">
                <button onClick={increment} className="button_counter_inc">Increment</button>
                <button onClick={decrement} className="button_counter_dec">Decrement</button>
            </div>
        </div>
    )
}

export default Counter