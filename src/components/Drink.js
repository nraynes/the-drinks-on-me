import React from 'react';
import '../styles/components/Drink.css'
function Drink(props) {
    
    return (
        <div className='drinkItem'>
            <img src={props.drink.drinks[0].strDrinkThumb}/>
            <p>{props.drink.drinks[0].strDrink}</p>
        </div>
    );
}

export default Drink;