import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Drink.css'
function Drink(props) {
    console.log(((props.drink.drinks[0].strDrink).replace(/\s{1,}/g,'')).toLowerCase())
    return (
        <Link style={{ textDecoration: 'none' }} to={`/${props.drink.drinks[0].strDrink}`}>
            <div id={((props.drink.drinks[0].strDrink).replace(/\s{1,}/g,'')).toLowerCase()} className='drinkItem'>
                <img src={props.drink.drinks[0].strDrinkThumb}/>
                <p>{props.drink.drinks[0].strDrink}</p>
                
            </div>
        </Link>
    );
}

export default Drink;