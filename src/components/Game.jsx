import {useState} from 'react'

export default function Game(props) {
    const [count, setCount] = useState(0)
    const [money, setMoney] = useState(0)
    let clickValue = 1;
    
    function click() {
        setCount(prevCount => prev + clickValue)
        setMoney(prevCount => prev + clickValue)
    }

    function buy(cost) {
        if (money > cost) {
            setMoney(prevMoney => prevMoney - cost)
        }
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={click}>Click</button>
            {count > 10 ? <button onClick={} className={money > 10 ? "purchasable" : undefined}></button> : undefined}
            {count > 20 ? <button onClick={} ></button> : undefined}
            {count > 50 ? <button onClick={} ></button> : undefined}
            {count > 75 ? <button onClick={} ></button> : undefined}
            {count > 100 ? <button onClick={} ></button> : undefined}
            
        </>
    )
}