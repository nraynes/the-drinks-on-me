import './styles/App.css';
import { useState } from 'react';
import TopBar from './components/TopBar';
import Drink from './components/Drink';
import { Route } from 'react-router-dom';

function App(props) {
  const [drinkList, setDrinkList] = useState(props.initList)
  const [curDrink, setCurDrink] = useState({})
  console.log('initList', props.initList);
  console.log('drinklist', drinkList);

  
  return (
    <div className="App">
      <TopBar setDrinkList={(value) => {setDrinkList(value)}} />
      <div className='listContainer'>
        {drinkList.map((item) => {
          return (<Drink drink={item}/>);
        })}
      </div>
      <Route path='/:drinkId' children={({match}) => {
        //placeholder
      }}>
      </Route>
    </div>
  );
}

export default App;
