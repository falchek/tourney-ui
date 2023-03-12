import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomeRouteView } from './components/HomeRouteView.js';
import { NavBar } from './components/NavBar.js';
import { RegisterView } from './components/Registration/RegisterView.js';
import { BracketRoute } from './components/Bracket/BracketRoute.js';
import { ResultsRouteView } from './components/ResultsRouteView.js';
import { Tournament } from './model/Tournament.js';
import { User } from './model/User.js';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import { Bracket } from './model/Bracket.js';
import { Round } from './model/Round.js';

/**
 * Creates the app that defines how the rest of these items are run.  
 * @returns App object 
 */
function App({tournament}) {

  const [tournamentState, setTournament] = useState(tournament);
  const navigate = useNavigate(); 

  /**
   * Adds a user to the Tournament Roster
   * @param {User} user 
   */
  function addUserToRoster(name) {
    let newState = tournamentState.clone();
    let user = new User(); 
    user.name = name;
    user.id = uuid(); 
    newState.addUser(user);
    setTournament(newState); 
  }

  /**
   * Changes an existing user within the roster. 
   * @param {User} user 
   */
  function changeUserInRoster(user, name) {
    // tournamentState.changeUser(user); 
    let newState = tournamentState.clone();
    newState.changeUser(user, name); 
    console.log("Changed tournament state:", newState);
    setTournament(newState);
  }

  /**
   * Builds the bracket, and moves us to that nav page. 
   * This would likely be backend input after the roster is submitted. 
   */
  function buildBracketFromRoster() {
    let newState = tournamentState.clone(); 
    let bracket = new Bracket(); 
    bracket.id = uuid(); 
    
    let round1 = new Round(); 
    round1.number = 0; 
    round1.id = uuid(); 

    // TODO enhance bracket building logic in backend 
    let roster = tournament.roster;
    let setTarget = roster.length / 2; // TODO validate even input.
    let idx = 0;  
    while (round1.sets.length < setTarget) {
      let set = new Set();
      set.id = uuid();  
      set.user1 = roster[idx];
      set.user2 = roster[idx +1];
      round1.sets.push(set); 
      idx += 2;  
    }
    bracket.rounds.push(round1);
    newState.bracket = bracket;
    console.log("New tournament state", newState);  
    setTournament(newState);
    navigate('/bracket');
  }

  function setWinner() {
    console.log("Set winner clicked"); 
  }

  return (
    <>
      <NavBar tournamentName={tournamentState.name}></NavBar>
      <Routes>
        <Route path="/" element={<HomeRouteView />}></Route>
        <Route path="/registration" element={
          <RegisterView
            onRegisterUser={addUserToRoster}
            onChangeUser={changeUserInRoster}
            roster={tournamentState.roster} 
            buildBracketFromRoster={buildBracketFromRoster}/>
          }>
        </Route>
        <Route path="/bracket" element={
          <BracketRoute 
            bracket={tournamentState.bracket}
            setWinner={setWinner}/>
          }>
        </Route>
        <Route path="/results" element={<ResultsRouteView />}></Route>
      </Routes>
    </>

  );

}


export default App;
