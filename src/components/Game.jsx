import {useState} from 'react'

export default function Game(props) {
    const [count, setCount] = useState(0)
    const [money, setMoney] = useState(0)
    const [clickValue, setClickValue] = useState(1)
    
    function click() {
        setCount(prevCount => prevCount + clickValue)
        setMoney(prevMoney => prevMoney + clickValue)
    }

    function buyIncrease() {
        if (money > 10) {
            setMoney(prevMoney => prevMoney - cost)
            setClickValue(prevClickValue => prevClickValue + cost)
        }
    }

    function buyLogo() {
        props.updateCountLogo()
    }

    function buySpin() {

    }
    
    return (
        <>
            <button onClick={click}>count is {count}</button>
             setLogoCount = 
            {count > 10 ? <button onClick={buyIncrease} className={money > 10 ? "purchasable" : "hidden"}>purchasable 10</button> : undefined}
            {count > 50 ? <button onClick={buyLogo} className={money > 50 ? "purchasable" : "hidden"}>purchasable 50</button> : undefined}
            {count > 100 ? <button onClick={buySpin} className={money > 100 ? "purchasable" : "hidden"}>purchasable 100</button> : undefined}
        </>
    );
}