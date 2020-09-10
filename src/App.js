import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import './App.css';
import Login from './components/Login';
import HooksLogin from './components/HooksLogin';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksLogin />
        <Login />
      </div>
    </Provider>
  );
}

export default App;
