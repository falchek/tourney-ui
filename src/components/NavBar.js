import { Link, NavLink } from "react-router-dom";

/**
 * Navigation bar for the app, changes the routing information
 * Routing information is from: https://hygraph.com/blog/routing-in-react
 * I'll need to navigate programatically when certain tasks are completed.  
 * @returns NavBar JSX Element
 */
export function NavBar(){

    return (
        <nav>
            <ol>
                <ul><NavLink to="/">Home</NavLink></ul>
                <ul><NavLink to="/registration">Registration</NavLink></ul>
                <ul><NavLink to="/bracket">Bracket</NavLink></ul>
                <ul><NavLink to="/results">Results</NavLink></ul>
            </ol>
        </nav>
    );
}
