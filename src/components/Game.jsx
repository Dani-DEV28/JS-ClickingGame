import {useState} from 'react'

export default function Game( {setCountLogo, setSpin}) {
    const [playerData, setPlayerData] = useState({
        money:0,
        count: 0,
        clickValue: 1,
    })
    
    function click() {
        setPlayerData(prev =>  ({
            ...prev,
            money:prev.money + prev.clickValue,
            count:prev.count + prev.clickValue
        }))
    }

    function buyIncrease() {
        if (playerData.money > 10) {
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 10,
                clickValue:prev.clickValue + 10
            }))
        }
    }

    function buySpin() {
        if (playerData.money > 100) {
            setSpin();
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 100
            }))
        }
    }

    function buyLogo() {
        if (playerData.money > 50) {
            setCountLogo();
            // setLogo();
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 50,
            }))
        }
    }
    
    return (
        <>
            <h2>${playerData.money}</h2>
            <button onClick={click}>count is {playerData.count}</button>
            <button onClick={buyIncrease} className={playerData.money > 10 && playerData.count > 10? "purchasable" : "hidden"}>Purchase Speed for $10</button>
            <button onClick={buyLogo} className={playerData.money >  50 && playerData.count > 50 ? "purchasable" : "hidden"}>Buy Logo FOR $50</button>
            <button onClick={buySpin} className={playerData.money > 100 && playerData.count > 100 ? "purchasable" : "hidden"}>Purchase SPIN for $100</button>
        </>
    );
}