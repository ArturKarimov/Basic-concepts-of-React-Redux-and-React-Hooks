import React, {useState} from 'react'
import './App.css'
import NavBar from "./components/Navigation/NavBar";
import Users from "./components/Users/Users";
import {BrowserRouter, Route} from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Context from "./Context";
import AllUsers from "./components/AllUsers/AllUsers";
import Logout from "./components/Logout/Logout";
import store from "./redux/store";
import {Provider} from "react-redux";
import Login from "./components/Login/Login";
import ProfileWithRouter from "./components/Profile/Profile";


function App() {

    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    const getUserId = (id) => {
        setId(id)
    }


    return (
        <Context.Provider value={{openModal, closeModal}}>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="appWrapper">
                        <div className="container">
                            <div className="allPage">
                                <NavBar/>
                                <div className="mainMenu">
                                    <Route path='/profile/:userId?' render={({ props }) => <ProfileWithRouter getUserId={getUserId}{...props}/>}/>
                                    <Route path='/users' render={({ props }) => <AllUsers id={id}/>}/>
                                    <Route path='/login' render={() => <Login />}/>
                                </div>
                                <div className="news">
                                    <Logout/>
                                </div>
                                {open && <Modal/>}
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        </Context.Provider>
    )
}

export default App
