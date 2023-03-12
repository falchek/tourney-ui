

export class Set {
    id; 
    user1;
    user2; 
    winner;

    constructor() {

    }

    /**
     * Sets a user as the winner
     * @param {User} user 
     */
    setWinner(user) {
        this.winner = user.id; 
    }
}