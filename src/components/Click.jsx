import React from 'react';

export default function Click({setPlayerData, playerData}) {
    function handleClick() {
        setPlayerData(prev =>  ({
            ...prev,
            money:prev.money + prev.clickValue,
            count:prev.count + prev.clickValue
        }))
    }

    return (
        <>  
            <button onClick={handleClick}>count is {playerData.count}</button>
        </>
    )
}