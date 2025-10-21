export default function SpinButton({setPlayerData, playerData, setSpin, spining}) {
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
            <button onClick={buySpin} className={playerData.money > 100 && playerData.count > 100 ? "purchasable" : "hidden"}>Purchase {spining ? "UNSPIN" : "SPIN"} for $100</button>
        </>
    )
}