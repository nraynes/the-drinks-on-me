import React, { useRef } from 'react';
import '../styles/components/TopBar.css';


function TopBar(props) {
    let { ofAge, setRender } = props;

    function returnCheckBox() {
        if (ofAge) {
            return (
                <input checked={props.nonA} onChange={(e) => {
                    e.preventDefault()
                    props.setNonA(!props.nonA)
                }} id='nonACheck' type='checkbox'></input>
            );
        } else if (!ofAge) {
            return (
                <input disabled checked={true} id='nonACheck' type='checkbox'></input>
            );
        }
    const nameInputRef = useRef()
    //search by character in a first and last name, make a fetch call for the length of name and take only the first result in the response and push to array and present the array

    //only take first result, push to a temp array
    //set statue to temp array temp array
    //map the state to the Drink.js

    function nameInput(event) {
        event.preventDefault()
        const promiseArray = [];
        //take input full name
        const resultArray = [];
        const userInput = nameInputRef.current.value
        let finalInput = '';
        if (userInput.includes(' ')) {
            const check = userInput.split(' ')
            //remove the space in the name
            finalInput = check[0].concat(check[1])
        } else {
            finalInput = userInput
        }

        //make a fetch call to the searchCocktailsByFirstLetter
        for (let i = 0; i < finalInput.length; i++) {
            //check for repeating characters in name
            const drinkPromise = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${finalInput[i]}`).then(res => res.json());

            promiseArray.push(drinkPromise)
        }

        ///REPEAT
        Promise.all(promiseArray).then(drinks => {
            //if finalInput has no repeating characters, then execute line 43
            let characterSet = {};
            for (let i = 0; i < finalInput.length; i++) {
                const char = finalInput[i];
                console.log('the char', char)
                if (characterSet[char] !== undefined) {
                    characterSet[char] += 1;
                } else {
                    characterSet[char] = 0;
                }
            }
            console.log('charSet', characterSet);

            for (const k in characterSet) {
                if (characterSet[k] > 0) {
                    for (let j = 0; j <= characterSet[k]; j++) {
                        drinks.map(drink => resultArray.push(drink.drinks[j]))
                    }
                } else {
                    drinks.map(drink => resultArray.push(drink.drinks[0]))
                }
            }

        })

        props.setDrinkList(resultArray)
    }


    return (
        <div className='TopBar'>
            <h1 onClick={()=> setRender(Math.random())}>Drinks On Me</h1>
            <div id='filterContainer'>
                <form onSubmit={nameInput}>
                    <input id='nameInput' name='nameInput' type='text' placeholder='Your name...' ref={nameInputRef}></input>
                    <button type='submit'>Submit</button>
                    <div>
                        {returnCheckBox()}
                        <label for='nonACheck'>Non-Alchoholic</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TopBar;