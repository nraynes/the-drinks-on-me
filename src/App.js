import './styles/App.css';
import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Drink from './components/Drink';
import DrinkDetails from './components/DrinkDetails';
import { Route, Switch } from 'react-router-dom';
import Modal from './components/Modal';
let isRendered = false;

function App(props) {
  const [drinkList, setDrinkList] = useState(props.initList);
  const [nonA, setNonA] = useState(false);
  const [curDrink, setCurDrink] = useState({});
  const [ofAge, setOfAge] = useState(null);
  const [renderAgain, setRenderAgain] = useState()

  useEffect(() => {
    if (nonA || !ofAge) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
        .then(data => data.json())
        .then(data => {
          let newArr = [];
          for (let i=0;i<data.drinks.length;i++) {
            let curObj = {};
            curObj.drinks = [data.drinks[i]];
            newArr.push(curObj);
          };
          setDrinkList(newArr);
        })
    } else {
      let result = [];
      let promiseArray = [];
      for (let i=1;i<=24;i++) {
        const newPromise = fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(data => data.json())
        .then(data => {
          result.push(data);
        })
        promiseArray.push(newPromise);
      }
      Promise.all(promiseArray)
        .then(() => {
          setDrinkList(result);
        })
    }
  }, [nonA, ofAge, renderAgain, setDrinkList]);

console.log('drink list defined in the app', drinkList)
  function renderModal() {
    if (ofAge === null) {
      return (<Modal setOfAge={(value) => setOfAge(value)}/>)
    }
  }

  return (
    <div className="App">
      {renderModal()}
      <TopBar setRender={(value) => {setRenderAgain(value)}} ofAge={ofAge} nonA={nonA} setNonA={(value) => {setNonA(value)}} setDrinkList={(value) => {setDrinkList(value)}} />
      <div className='listContainer'>
        {Array.isArray(drinkList) ? drinkList.map((item, index) => {
          return (<Drink key={index} drink={item}/>);
        }) : null}
      </div>
      <Switch>
        <Route path='/:drinkName' children={({ match }) => {
          let matchedName = match.params.drinkName;
          if (!isRendered) {
            isRendered = true;
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${matchedName}`)
              .then((data) => data.json())
              .then((data) => {
                setCurDrink(data)
              })
          }
          if (Object.keys(curDrink).length > 0 && (curDrink.drinks[0].strDrink).toLowerCase() === matchedName.toLowerCase()) {
            setTimeout(() => {isRendered = false}, 1000)
            return <DrinkDetails drink={curDrink.drinks[0]} />
          };
        }}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
