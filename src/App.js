import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Body from './Components/Body.js'
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact strict render={
          () => (
            <Body/>
          )
        } />
        <Route path="/Info" exact strict render={
          () => (
            <Body/>
          )
        } />
        <Route path="/About" exact strict render={
          () => (
            <Body/>
          )
        } />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
