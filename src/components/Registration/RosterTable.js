import React from "react";

/**
 * 
 * @param {User[] } roster 
 * @returns JSX table with the roster + controls
 */
export function RosterTable({roster, changeUser, onRegisterUser}) {

    return(
        <div>
            <RosterHeader></RosterHeader>
            <RosterList roster={roster} changeUser={changeUser}></RosterList>
            <RosterAdd onRosterAdd={onRegisterUser}></RosterAdd>
        </div>
    ); 
}

/**
 * Adds the roster header
 * @returns {RosterHeader}
 */
function RosterHeader(){

    return (
        <div>Name:</div>
    )
}


/**
 * List container for the roster  
 * @param roster - the model of the tournament rost
 * @param changeUser - a callback function to change the user
 * @returns Roster list JSX elements  
 */
function RosterList({roster, changeUser}) {
   const rosterListItems = roster.map((user) => RosterListItem(user, changeUser))
    

    return(
        <div>
            {rosterListItems}
        </div>
    )
}

/**
 * 
 * @param {User} user - the user for this control
 * @param onNameChange - callback for when a user's name is changed
 * @returns JSX Row item.  
 */
function RosterListItem(user, onNameChange) {
    let name = user.name

    function handleChange(event) {
        console.log("My name", event.target.value); 
        onNameChange(user, event.target.value); 
    }

    return(
    <div> 
        <input key={user.id} value={name} onChange={handleChange}></input>
    </div>
    )
}

/**
 * Control to add a new player to the roster
 * @param onRosterAdd - callback function to return a new player. 
 * @returns 
 */
function RosterAdd({onRosterAdd}) {
    const [newName, setNewName] = React.useState("");
    
    function handleChange(event) {
        setNewName(event.target.value);
    }

    function handleClick(){
        onRosterAdd(newName); 
        setNewName(""); 
    }

    return(
        <div>
            <input value={newName} onChange={handleChange}></input>
            <button onClick={handleClick}>+</button>
        </div>
    )


}