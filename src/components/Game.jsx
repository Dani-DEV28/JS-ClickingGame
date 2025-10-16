import {useState} from 'react'

export default function Game(props) {
    const [count, setCount] = useState(0)
    
    function click() {
        setCount(prev => prev + 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={click}>Click</button>
        </>
    )
}