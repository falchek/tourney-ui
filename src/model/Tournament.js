import {cloneDeep, isUndefined} from 'lodash';
import { Bracket } from './Bracket';

/**
 * Represents a Tournament model, which comprises all of the data entities that a 
 * tournament requires to run.  
 */


export class Tournament {
    // Fields 
    name;
    roster;
    bracket;

    constructor() {
        this.name = ""; 
        this.roster = [];
        this.bracket = new Bracket(); 
    }

    /**
     * Adds a user to the roster
     * @param {User} user  
     */
    addUser(user) {
        this.roster.push(user); 
    }

    /**
     * Changes an existing user
     * @param {User} user 
     */
    changeUser(user, name) {
        console.log("Provided user", user);
        let changedUser = this.roster.find(oldUser => oldUser.id === user.id);
        if(isUndefined(changedUser)) {
            console.log("Could not find user for change.", user);
        } else {
            changedUser.name = name;
            console.log("Changed users", changedUser); 
        }
         
    }

    /**
     * Clones for state update. 
     * @returns a clone of this object
     */
    clone() {
        return cloneDeep(this);
    }

}