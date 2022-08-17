import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutMenu from "./components/LayoutMenu";
import Main from "./components/LP/Main";
import List from "./components/TestList/List";
import Profile from "./components/Profile";
import Register from "./components/LP/Register";
import Login from "./components/Login";

function App() {

    const IS_LOGGED = sessionStorage.getItem('user');

    return  (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LayoutMenu loggedIn={IS_LOGGED}/>}>
                    <Route path='/' element={<Main loggedIn={IS_LOGGED}/>} />
                    <Route path='/list' element={ <List />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                    {IS_LOGGED === null
                        ?<Route path='/login' element={<Login />} />
                        :<Route path='/' element={<Main />} />
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
