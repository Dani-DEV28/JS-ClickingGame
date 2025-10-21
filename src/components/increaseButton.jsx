export default function IncreaseButton({setPlayerData, playerData}) {
    function buyIncrease() {
        console.log(playerData)
        if (playerData.money > 10) {
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 10,
                clickValue:prev.clickValue + 10
            }))
        }
    }

    return (
        <>  
            <button onClick={buyIncrease} className={playerData.money > 10 && playerData.count > 10? "purchasable" : "hidden"}>Purchase Speed for $10</button>
        </>
    )
}