import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
import './App.css';
import './style.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/services';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

function App() {
  return (
    <div className="App">
 
            <Header/>
            <Routes>
                <Route path="/" Component={ Home } />   
                <Route path="/about" Component={ About } />  
                <Route path="/Services" Component={ Services } />  
                <Route path="/Portfolio" Component={ Portfolio } />   
                <Route path="/contact" Component={ Contact  } />     
              </Routes>
            <Footer/>
    </div>
  );
}

export default App;
