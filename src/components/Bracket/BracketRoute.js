/**
 * The brackets routeview
 * @returns BracketRouteView
 */
export function BracketRoute({bracket, setWinner}) {


    return(
        <div>
            <div>The bracket route view</div>
            <BracketGridContainer
                bracket={bracket}
                setWinner={setWinner}
            ></BracketGridContainer>
        </div>

        
    );
}


/**
 * TODO:  When I figure out grids, bascially, we're gonna build this guy up.  
 * @returns 
 */
function BracketGridContainer({bracket, setWinner}) {
    console.log(bracket);
    return(
        <div>
            <RoundContainer
                round={bracket.rounds[0]}
                setWinner={setWinner}/>
        </div>
    );
}

function RoundContainer({round, setWinner}) {
    console.log("Round", round);
    const setContainers = round.sets.map(set => SetContainer(set, setWinner));
    
    return(
        <div>
            {setContainers}
        </div>
    )
}

function SetContainer(set, setWinner) {
    const mySet = set; 
    function handleClick() {
        setWinner(); 
    }

    return(
        <div>
                <div>
                    {mySet.user1.name}
                    <button onClick={handleClick}>Win</button>
                </div>
                <div>
                    {mySet.user2.name}
                    <button onClick={handleClick}>Win</button>
                </div>
        </div>
    )

}