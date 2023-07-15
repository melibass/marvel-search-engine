import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

//import routes
import Home from './routes/Home';
import About from './routes/About';
import HeroDetails from './routes/HeroDetails'
//import components
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/:id'} element={<HeroDetails/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
