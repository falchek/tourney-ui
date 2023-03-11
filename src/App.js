import { Routes, Route } from 'react-router-dom';
import { HomeRouteView } from './components/HomeRouteView.js';
import { NavBar } from './components/NavBar.js';
import './App.css';
import { RegisterView } from './components/Registration/RegisterView.js';
import { BracketRouteView } from './components/BracketRouteView.js';
import { ResultsRouteView } from './components/ResultsRouteView.js';
import { Tournament } from './model/Tournament.js';
import { User } from './model/User.js';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

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

  const [tournamentState, setTournament] = useState(tournament);

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

  return (
    <>
      <NavBar tournamentName={tournamentState.name}></NavBar>
      <Routes>
        <Route path="/" element={<HomeRouteView />}></Route>
        <Route path="/registration" element={
          <RegisterView
            onRegisterUser={addUserToRoster}
            onChangeUser={changeUserInRoster}
            roster={tournamentState.roster} />
        }>
        </Route>
        <Route path="/bracket" element={<BracketRouteView />}></Route>
        <Route path="/results" element={<ResultsRouteView />}></Route>
      </Routes>
    </>

  );

}


function bootstrapTournament(tournament) {
  // TODO:  Replace with backend call
  // Build a list of users
  let userNames = ["Mike", "Julie", "Michael", "Nate", "Liz", "Johni-Ann", "Mang", "Cece"];
  userNames.map((name) => {
    let user = new User();
    user.name = name;
    user.id = uuid();
    tournament.addUser(user);
  });

}

export default App;
