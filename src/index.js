import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Tournament } from './model/Tournament';
import { User } from './model/User';
import {v4 as uuid} from 'uuid'; 

let tournament = new Tournament(); 
bootstrapTournament(tournament); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tournament={tournament}/>
    </BrowserRouter>
  </React.StrictMode>
);

function bootstrapTournament(tournament) {
  // TODO:  Replace with backend call
  // Build a list of users
  tournament.name = "My First Tournament"; 
  let userNames = ["Mike", "Julie", "Michael", "Nate", "Liz", "Johni-Ann", "Mang", "Cece"];
  userNames.map((name) => {
    let user = new User();
    user.name = name;
    user.id = uuid();
    tournament.addUser(user);
  });

}