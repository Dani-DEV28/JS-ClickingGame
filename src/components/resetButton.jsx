export default function ResetButton({setPlayerData, playerData, resetLogo}) {
    function buyReset() {
        console.log(playerData)
        if (playerData.money > 1000) {
            setPlayerData(prev =>  ({
                ...prev,
                money:0,
                clickValue:1,
            }));
            resetLogo();
        }
    }

    return (
        <>  
            <button onClick={buyReset} className={playerData.money > 1000 && playerData.count > 1000? "purchasable" : "hidden"}>Purchase Reset for $1000</button>
        </>
    )
}