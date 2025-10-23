import {useState} from 'react'
import Click from './Click';
// import BuyIncrease from './BuyIncrease'
// import BuyLogo from './BuyLogo'
import SpinButton from './spinButton'
import IncreaseButton from './increaseButton';
// import ResetButton from './resetButton';
import logoButton from './logoButton';

export default function Game( {setCountLogo, setSpin, spining}) {
    const [playerData, setPlayerData] = useState({
        money:0,
        count: 0,
        clickValue: 1,
    })

    // function buyIncrease() {
    //     if (playerData.money > 10) {
    //         setPlayerData(prev =>  ({
    //             ...prev,
    //             money:prev.money - 10,
    //             clickValue:prev.clickValue + 10
    //         }))
    //     }
    // }
    
    return (
        <>
            <h2>${playerData.money}</h2>

            <Click 
                setPlayerData = {setPlayerData}
                playerData = {playerData}
            />
            
            <IncreaseButton
                setPlayerData = {setPlayerData}
                playerData = {playerData}
            />
            
            <logoButton 
                setPlayerData={setPlayerData}
                playerData={playerData}
                setCountLogo={setCountLogo}
            />
            {/* 
            <ResetButton
                setPlayerData = {setPlayerData}
                playerData = {playerData}
                resetLogo = {resetLogo}
            /> */}
            <SpinButton 
                setPlayerData = {setPlayerData}
                playerData = {playerData}
                setSpin = {setSpin}
                spining = {spining}
            />
        </>
    );
}