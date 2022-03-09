import React from 'react'

function ComponentForProps(props) {

    const values = Object.values(props.obj);
    const handleConsoleLog = props.func;

return (
    <div>
    ComponentForProps {props.number}
    <p>{props.text}</p>
    <button onClick={handleConsoleLog}>Object to console</button>
    <ul>
        {values &&
            values.map((item) => <li key = { item }> { item } </li>)}
    </ul>
    </div>
)
}

export default ComponentForProps