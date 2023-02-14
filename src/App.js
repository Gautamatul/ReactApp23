
import { useEffect, useState } from 'react';
import './App.css';
import { Accounts } from './components/Accounts';
import { getAccounts } from './Actions/AccountActions';
import { useSelector, useDispatch } from 'react-redux'
import { Account } from './components/Account';
import "semantic-ui-css/semantic.min.css";
import { AppRouter } from './components/AppRouter';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import { Button } from "semantic-ui-react"
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { EditAccount } from './components/EditAccount';
function App(props) {
  // const accounts = useSelector((state) => state.accounts);


  return (
    <div className="App">
       <BrowserRouter>
       <AppRouter/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route path='/aboutMe' element={<AboutMe/>} />
          <Route path='/accounts' element={<Accounts/>} />
          <Route path='/newAccount' element={<Account/>} />
          <Route path='/editAccount' element={<EditAccount/>} />
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
