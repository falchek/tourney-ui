import { Routes, Route } from 'react-router-dom';
import {HomeRouteView} from './components/HomeRouteView.js';
import {NavBar} from './components/NavBar.js';
import './App.css';
import { RegisterRouteView } from './components/RegisterRouteView.js';
import { BracketRouteView } from './components/BracketRouteView.js';
import { ResultsRouteView } from './components/ResultsRouteView.js';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeRouteView />}></Route>
        <Route path="/registration" element={<RegisterRouteView />}></Route>
        <Route path="/bracket" element={<BracketRouteView />}></Route>
        <Route path="/results" element={<ResultsRouteView />}></Route>
      </Routes>   
    </>
    
  );
}

export default App;
