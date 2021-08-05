import React from 'react';
import styles from "./DrinkDetails.module.css";

function DrinkDetails(props) {

    const ingredientsArray = [];
    const measurementArray = [];
    const resultArray = [];

    for (const k in props.drink) {
        if (k.includes('strIngredient')) {
            if (props.drink[k]) {
                ingredientsArray.push(props.drink[k])
            }
        } else if (k.includes('strMeasure')) {
            if (props.drink[k]) {
                measurementArray.push(props.drink[k])
            } else {
                measurementArray.push('');
            }
        }
    }

    for (let i = 0; i < ingredientsArray.length; i++) {
        const ingredient = ingredientsArray[i];
        const measurement = measurementArray[i];

        if (measurement) {
            let temp = `${measurement}: ${ingredient}`
            resultArray.push(temp)
        } else {
            let temp = `${ingredient}`;
            resultArray.push(temp)
        }
    }





    //push the array a string that contains the `{strMeasurement1} + {strIngredient1}`

    return (
        <div className={styles.drinkDetailsBody}>
            <div className={styles.drinkDetailsName}>
                {props.drink.strDrink}
            </div>
            <div className={styles.drinkDetailsContents}>
                <div className={styles.drinkDetailsIngredients}>
                    Ingredients
                    <div>
                        <ul>
                            {resultArray.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })}
                        </ul>
                    </div>


                </div>
                <div className={styles.drinkDetailsSteps}>
                    Steps
                    <article>{props.drink.strInstructions}</article>
                </div>
            </div>
        </div>
    );
}

export default DrinkDetails;