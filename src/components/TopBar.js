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
    const nameInputRef = useRef();

    function nameInput(event) {
        event.preventDefault()
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

        //make a fetch call promiseto the searchCocktailsByFirstLetter
        const promiseArray = [];
        for (let i = 0; i < finalInput.length; i++) {
            //check for repeating characters in name
            const drinkPromise = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${finalInput[i]}`).then(res => res.json());

            promiseArray.push(drinkPromise)
        }

        Promise.all(promiseArray).then(drinksArray => {
            //if finalInput has no repeating characters, then execute line 43
            let characterSet = {};
            for (let i = 0; i < finalInput.length; i++) {
                const char = finalInput[i];

                if (characterSet[char] !== undefined) {
                    characterSet[char].repeated += 1
                } else {
                    characterSet[char] = { repeated: 0, indexFound: i }
                }
            }

            for (const k in characterSet) {
                const charObject = characterSet[k];
                if (charObject.repeated > 0) {
                    for (let j = 0; j <= charObject.repeated; j++) {
                        console.log('repeated-char', k, 'drinks', drinksArray[charObject.indexFound].drinks[j])
                        resultArray.push(drinksArray[charObject.indexFound].drinks[j])
                    }
                } else {
                    console.log('non-repeated-char', k, 'drinks', drinksArray[charObject.indexFound].drinks[0])
                    resultArray.push(drinksArray[charObject.indexFound].drinks[0])
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