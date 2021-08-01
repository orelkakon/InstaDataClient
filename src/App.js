import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Info from './Components/Info.js'
import About from './Components/About.js'
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact strict render={
          () => (
            <Info/>
          )
        } />
        <Route path="/Info" exact strict render={
          () => (
            <Info/>
          )
        } />
        <Route path="/About" exact strict render={
          () => (
            <About/>
          )
        } />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
