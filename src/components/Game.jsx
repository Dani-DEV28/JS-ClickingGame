import {useState} from 'react'

export default function Game( {setCountLogo, setSpin}) {
    const [count, setCount] = useState(0)
    const [money, setMoney] = useState(0)
    const [clickValue, setClickValue] = useState(1)
    
    function click() {
        setCount(prevCount => prevCount + clickValue)
        setMoney(prevMoney => prevMoney + clickValue)
    }

    function buyIncrease() {
        if (money > 10) {
            setMoney(prevMoney => prevMoney - 10)
            setClickValue(prevClickValue => prevClickValue + 10)
        }
    }

    function buySpin() {
        if (money > 100) {
            setSpin();
            setMoney(prevMoney => prevMoney - 100)
            setClickValue(prevClickValue => prevClickValue + 100)
        }
    }

    function buyLogo() {
        if (money > 50) {
            setCountLogo();
            setMoney(prevMoney => prevMoney - 50)
            setClickValue(prevClickValue => prevClickValue + 50)
        }
    }
    
    return (
        <>
            <h2>${money}</h2>
            <button onClick={click}>count is {count}</button>
            <button onClick={buyIncrease} className={money > 10 && count > 10? "purchasable" : "hidden"}>Purchase Speed for $10</button>
            <button onClick={buyLogo} className={money >  50 && count > 50 ? "purchasable" : "hidden"}>Buy Logo FOR $50</button>
            <button onClick={buySpin} className={money > 100 && count > 100 ? "purchasable" : "hidden"}>Purchase SPIN for $100</button>
        </>
    );
}