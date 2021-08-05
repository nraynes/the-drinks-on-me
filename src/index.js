import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


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
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <App initList={result}/>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })