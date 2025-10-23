export default function logoButton({setPlayerData, playerData, setCountLogo}) {
    function buyLogo() {
        if (playerData.money > 50) {
            setCountLogo();
            // setLogo();
            setPlayerData(prev =>  ({
                ...prev,
                money:prev.money - 50,
                clickValue:prev.clickValue + 10
            }))
        }
    }

    return (
        <>  
            <button onClick={buyLogo} className={playerData.money >  50 && playerData.count > 50 ? "purchasable" : "hidden"}>Buy Logo FOR $50</button>
        </>
    )
}