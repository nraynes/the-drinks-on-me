import React, {useRef} from 'react';
import '../styles/components/TopBar.css';


function TopBar(props) {
    let { ofAge, setRender } = props;
    let userInput = useRef()

    function filterDrinks(input) {
        if (!props.nonA) {
            let promiseArray = [];
            let resultArray = [];
            for (let i=0;i<input.length;i++) {
                let newPromise = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input[i]}`)
                    .then(data => data.json())
                    .then(data => {
                        resultArray.push(data.drinks)
                    })
                promiseArray.push(newPromise)
            }
            let filterArray = [];
            Promise.all(promiseArray)
                .then(() => {
                    for (let i=0;i<resultArray.length;i++) {
                        let curArr = resultArray[i];
                        let pickedDrink;
                        if (Array.isArray(curArr)) {
                            if (curArr.length > 0) {
                                let drinkPicked = false;
                                let count = 0;
                                while (drinkPicked === false && count < 10) {
                                    pickedDrink = curArr[Math.floor(Math.random() * (curArr.length-1))]
                                    let buildObj = {};
                                    buildObj.drinks = [pickedDrink]
                                    if (filterArray.length === 0) {
                                        filterArray.push(buildObj)
                                        drinkPicked = true;
                                    } else if (!(filterArray.find((item) => {
                                        if ((item.drinks[0].strDrink).toLowerCase() === (buildObj.drinks[0].strDrink).toLowerCase()) {
                                            return item;
                                        }
                                    }))) {
                                        filterArray.push(buildObj)
                                        drinkPicked = true;
                                    }
                                    count++;
                                }
                            }
                        }
                    }
                    props.setDrinkList(filterArray);
                })
        }
    }

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
    }


    return (
        <div className='TopBar'>
            <h1 onClick={()=> setRender(Math.random())}>Drinks On Me</h1>
            <div id='filterContainer'>
                <form>
                    <div>
                        <input ref={userInput} id='nameInput' name='nameInput' type='text' placeholder='Your name...'></input>
                        <button id='searchButton' onClick={(e) => {
                            e.preventDefault()
                            let myInput = (((userInput.current.value).replace(/\s{1,}/g,'')).toLowerCase()).split('')
                            userInput.current.value = '';
                            filterDrinks(myInput)
                        }}>Search</button>
                    </div>
                    <div>
                        {returnCheckBox()}
                        <label for='nonACheck'>Non-Alchoholic</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopBar;