<<<<<<< HEAD
import './styles/App.css';
import { useState } from 'react';
import TopBar from './components/TopBar';
import Drink from './components/Drink';
// import DrinkDetails from './components/drink-details.js';
import { Route, Switch } from 'react-router-dom';
let isRendered = false;

function App(props) {
  const [drinkList, setDrinkList] = useState(props.initList)
  const [curDrink, setCurDrink] = useState({})

=======
import Modal from "./components/modal/Modal"
>>>>>>> fe7aaa14f06fcacb0596fa0bbc7ad9800d8c4878

  return (
<<<<<<< HEAD
    <div className="App">
      <TopBar setDrinkList={(value) => {setDrinkList(value)}} />
      <div className='listContainer'>
        {drinkList.map((item) => {
          return (<Drink drink={item}/>);
        })}
      </div>
      <Switch>
        <Route path='/:drinkName' children={({match}) => {
          let matchedName = match.params.drinkName;
          if(!isRendered) {
            isRendered = true;
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${matchedName}`)
              .then ((data) => data.json())
              .then ((data) => {
                  setCurDrink(data) 
              })
          }
          if (Object.keys(curDrink).length > 0 && (curDrink.drinks[0].strDrink).toLowerCase() === matchedName.toLowerCase()) {
            // <DrinkDetails drink={curDrink.drinks[0]} />
            console.log(curDrink);
            setTimeout(() => {isRendered = false}, 1000)
          };
        }}>
        </Route>
      </Switch>
=======
    <div>
      <Modal />
>>>>>>> fe7aaa14f06fcacb0596fa0bbc7ad9800d8c4878
    </div>
  );
}

export default App;
