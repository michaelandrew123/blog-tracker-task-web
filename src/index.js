import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*

redux example
import {createStore} from 'redux'

//STORE -> GLOBALIZED STATE
//ACTION INCREMENT
const increment = () =>{
  return {
    type: 'INCREMENT'
  }
}

const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
}


//REDUCER
const counter = (state = 0, action)=>{
  switch(action.type){
    case "INCREMENT": 
      return state + 1;
    case "DECREMENT": 
      return state - 1;
  }
}

let store = createStore(counter);

//Display console
store.subscribe(()=> console.log(store.getState()))

//DISPATCH
store.dispatch(increment());
*/
import {createStore, combineReducers} from 'redux';
import counterReducer from './redux/reducers/counter';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import {FavoritesContextProvider} from './store/favorites-context';


const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost/reactImageUpload.php', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// App.use(cors(corsOptions));



ReactDOM.render(


  <React.StrictMode>
    <FavoritesContextProvider>
      <Provider store={store}>  
        <App />
      </Provider>
    </FavoritesContextProvider>


    {/* <Router>
      <Switch> 
        <Route exact path="/"> 
          <App />
        </Route> 
        <Route path="/about"> 
            About
        </Route> 
        <Route path="/contact"> 
            Contact 
        </Route>
      </Switch> 
    </Router> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
