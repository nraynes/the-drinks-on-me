import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
<<<<<<< HEAD
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
=======
=======

import App from './App';
>>>>>>> cd0af60f9d4da65c24aaee02b576730ea9a73aa3


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
<<<<<<< HEAD
);
>>>>>>> fe7aaa14f06fcacb0596fa0bbc7ad9800d8c4878
=======
);
>>>>>>> cd0af60f9d4da65c24aaee02b576730ea9a73aa3
