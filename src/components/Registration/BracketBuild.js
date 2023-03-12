
/**
 * Builds the rounds from the current roster.  
 * @returns 
 */
export function BracketBuild({buildBracketFromRoster}) {

    return (
        <div>
            <button onClick={() => buildBracketFromRoster()}>Build Rounds from Current Roster</button>
        </div>
    )
}