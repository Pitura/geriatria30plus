import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import LayoutMenu from "./components/LayoutMenu";
import Main from "./components/LP/Main";
import List from "./components/TestList/List";
import Profile from "./components/Profile";
import Register from "./components/LP/Register";
import Login from "./components/Login";

function App() {

    const IS_LOGGED = sessionStorage.getItem('user');
    const USER_ID = sessionStorage.getItem('id');

    return  (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <LayoutMenu loggedIn={IS_LOGGED}/>}>
                    <Route path='/' element={<Main loggedIn={IS_LOGGED}/>} />
                    <Route path='/list' element={ <List loggedIn={IS_LOGGED} id={USER_ID}/>} />
                    <Route path='/profile' element={<Profile loggedIn={IS_LOGGED}/>} />
                    <Route path='/register' element={<Register />} />
                    {IS_LOGGED === null
                        ?<Route path='/login' element={<Login />} />
                        :<Route path='/' element={<Main />} />
                    }
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App;
