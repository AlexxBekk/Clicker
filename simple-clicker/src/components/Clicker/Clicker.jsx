import React, { useState } from 'react'

function Clicker() {
    const [clickCount, updateCount] = useState(0)
    const [inputValue, getState] = useState('')

    function emptyValue(value){
        if(value === '') {
            return 'Никто не пишет...';
        }
        return value;
    }

    return (
        <div className='container'>
            <div className = 'container__block'>
                    <p className='block__title txt'> Кликов: {clickCount} </p>
                <button onClick={() => updateCount(clickCount + 1)} className='block__btn txt'> Нажми меня! </button>
            </div>
            <div className = 'container__block'>
                <p className='block__title txt'> {emptyValue(inputValue)} </p>
                <input
                    onChange={(event) => getState(event.target.value)} className='block__input txt' type="text" value={inputValue} placeholder='Напиши что-нибудь...' />
            </div>
        </div>
    )
}

export default Clicker;