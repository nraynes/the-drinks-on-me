import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DrinkAlt.module.css';

function DrinkAlt({ drink }) {
    if (drink) {
        return (
            <Link style={{ textDecoration: 'none' }} to={`/${drink.strDrink}`}>
                <div className={styles.drinkItem}>
                    <img alt={drink.strDrink} src={drink.strDrinkThumb} />
                    <p>{drink.strDrink}</p>
                </div>
            </Link>

        );
    } else {
        return (<p>Well this is weird... :[</p>)
    }
}

export default DrinkAlt;