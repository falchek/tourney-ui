import { RosterTable } from "./RosterTable"

/**
 * The Register Route view
 * @param roster - a list of users in the tournament's roster
 * @param onRegisterUser - a callback to add a user to a roster
 * @returns Register Route View
 */
export function RegisterView({roster, onRegisterUser, onChangeUser}) {

    return (
        <div>
            <h3>Tournament Registration</h3>
            <RosterTable 
                roster={roster} 
                changeUser={onChangeUser}
                onRegisterUser={onRegisterUser}>
            </RosterTable>
        </div>
    )
}