export default function Click({setPlayerData, playerData, setSpin}) {
    function buySpin() {
        if (playerData.money > 100) {
            setSpin();
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 100
            }))
        }
    }

    return (
        <>  
            <button onClick={buySpin} className={playerData.money > 100 && playerData.count > 100 ? "purchasable" : "hidden"}>Purchase SPIN for $100</button>
        </>
    )
}