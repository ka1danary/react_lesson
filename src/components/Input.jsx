import React, {useState} from 'react'

const Input = function () {
    const [text, setText] = useState('Текст в инпуте')
    return (
        <input className="Input_first"
            type="text"
            value={text}
            onChange={event => setText(event.target.value)} // при написании текста он должен меняться сразу
        />
    )
}
export default Input