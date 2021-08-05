import React from 'react';
import "../styles/components/DrinkDetails.css"

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
        <div className={'drinkDetailsContainer'}>
            <h4>{props.drink.strDrink}</h4>
            <div className={'ContentContainer'}>
                <div className={'IngredientsContainer'}>
                    <p>Ingredients</p>
                    <div>
                        <ul>
                            {resultArray.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })}
                        </ul>
                    </div>


                </div>
                <div className={'StepsContainer'}>
                    <p>Steps</p>
                    <article>{props.drink.strInstructions}</article>
                </div>
            </div>
        </div>
    );
}

export default DrinkDetails;