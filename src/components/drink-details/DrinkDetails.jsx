import React, { useEffect } from 'react';
import styles from "./DrinkDetails.module.css";

function DrinkDetails(props) {

    // strIngredient1": "Tequila",
    // "strIngredient2": "Triple sec",
    // "strIngredient3": "Lime juice",
    // "strIngredient4": "Salt",
    // "strIngredient5": null,
    // "strIngredient6": null,
    // "strIngredient7": null,
    // "strIngredient8": null,
    // "strIngredient9": null,
    // "strIngredient10": null,
    // "strIngredient11": null,
    // "strIngredient12": null,
    // "strIngredient13": null,
    // "strIngredient14": null,
    // "strIngredient15": null,

    // const ingredientsArray = [];
    // const measurementArray = [];
    // for (const k in props.drink) {
    //     if (k.includes('strIngredient')) {
    //         if (props.drink[k]) {
    //             ingredientsArray.push(props.drink[k])
    //         }
    //     } else if (k.includes('strMeasure')) {
    //         if (props.drink[k]) {
    //             measurementArray.push(props.drink[k])
    //         }
    //     }
    // }

    return (
        <div className={styles.drinkDetailsBody}>
            <div className={styles.drinkDetailsName}>
                {/* {props.drink.strDrink} */}
                Drink Name
            </div>
            <div className={styles.drinkDetailsContents}>
                <div className={styles.drinkDetailsIngredients}>
                Ingredients
                    <div>

                        <ul>
                            <li>1</li>
                            <li>1/2</li>
                            <li>4 oz</li>
                        </ul>
                        <ul>
                            <li>Lemon juice</li>
                            <li>shots of vodka</li>
                            <li>can of redbull</li>
                        </ul>
                    </div>
                  

                </div>
                <div className={styles.drinkDetailsSteps}>
                    Steps
                 <article>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."</article>
                </div>
            </div>
        </div>
    );
}

export default DrinkDetails;