import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Info from './Components/Info.js'
import About from './Components/About.js'
import SignIn from './Components/SignIn.js'
import Analystics from './Components/Analystics.js'
import AnalysticsSearch from './Components/AnalysticsSearch.js'
import AnalysticsPosts from './Components/AnalysticsPosts.js'

import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const properties = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined
}

export const notify = async (msg) => {
  await toast.dark(msg, properties)
}

function App() {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('session'))
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header loggedIn={loggedIn}/>
        <Route path="/" exact strict render={
          () => (
            <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )
        } />
        <Route path="/Analystics" exact strict render={
          () => (
            <Analystics />
          )
        } />
        <Route path="/Info" exact strict render={
          () => (
            <Info />
          )
        } />
        <Route path="/About" exact strict render={
          () => (
            <About />
          )
        } />
        <Route path="/Analystics/posts" exact strict render={
          () => (
            <AnalysticsPosts />
          )
        } />
        <Route path="/Analystics/search" exact strict render={
          () => (
            <AnalysticsSearch />
          )
        } />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
