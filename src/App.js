import { Routes, Route } from 'react-router-dom';
import {HomeRouteView} from './components/HomeRouteView.js';
import {NavBar} from './components/NavBar.js';
import './App.css';
import { RegisterView } from './components/Registration/RegisterView.js';
import { BracketRouteView } from './components/BracketRouteView.js';
import { ResultsRouteView } from './components/ResultsRouteView.js';
import { Tournament } from './model/Tournament.js';
import { User } from './model/User.js';

/**
 * Creates the app that defines how the rest of these items are run.  
 * @returns App object 
 */
function App() {

  // TODO: Load this tournament from REST request.  
  let tournament = new Tournament(); 
  tournament.name = "My First Tournament"; 

  bootstrapTournament(tournament); 
  console.log(tournament); 
  /**
   * Adds a user to the Tournament Roster
   * @param {User} user 
   */
  function addUserToRoster(user) {
    tournament.addUser(user); 
  }

  return (
    <>
      <NavBar tournamentName={tournament.name}></NavBar>
      <Routes>
        <Route path="/" element={<HomeRouteView />}></Route>
        <Route path="/registration" element={
          <RegisterView 
            onRegisterUser={addUserToRoster}
            roster={tournament.roster}/>
          }>
          </Route>
        <Route path="/bracket" element={<BracketRouteView />}></Route>
        <Route path="/results" element={<ResultsRouteView />}></Route>
      </Routes>   
    </>
    
  );
  
}


function bootstrapTournament(tournament) {
  // Build a list of users
  let userNames = ["Mike", "Julie", "Michael", "Nate", "Liz", "Johni-Ann", "Mang", "Cece"];
  userNames.map((name) => {
    let user = new User(); 
    user.name = name;
    tournament.addUser(user);
  });
  
}

export default App;
