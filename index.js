// Specifications / Features
// You are trying to convince your friend group to go on a trip!
// “Me” is very confident (100) about going on a trip and will try to convince everyone to go.
// Everyone else is not very confident (10)
// Everyone has a charisma they can use to convince or dissuade others from going.
// You will go through your friend group convincing them one-by-one (but you might also end up getting dissuaded by your friends. )
// Make a friendGroup class
// properties:
// goingOnTrip
// friends
// addFriend Method
// Make an array of friends (of class Person) inside of friendGroup object
// Make “me” object (of class Person)
// These should have properties:
// name
// confidence
// requiredConfidence
// charisma (how good at persuading)
// convince METHOD
// discourage METHOD


class Person {
    constructor(name, confidence, requiredConfidence, charisma){
        this.name = name;
        this.confidence = confidence;
        this.requiredConfidence = requiredConfidence;
        this.charisma = charisma;
    }
    convince(member){
        console.log(this.name);
    }
    discourage(){

    }
}

let me = new Person("Albruce", 100, 30, 20);

class FriendGroup {
    constructor(){
        this.goingOnTrip = false;
        this.friends = [];
    }
    addFriend(name, confidence, requiredConfidence, charisma){
        this.friends.push(new Person(name, confidence, requiredConfidence, charisma));
    }

    }

    let myFriendGroup = new FriendGroup();

    myFriendGroup.addFriend("Jared", 10, 60, 10);
    myFriendGroup.addFriend("Sarah", 10, 65, 10);
    myFriendGroup.addFriend("James", 10, 50, 10);
    myFriendGroup.addFriend("Darren", 10, 70, 10);

    console.log(myFriendGroup);

    //loop
    const convinceGroup = ()=>{
        let friends=myFriendGroup.friends;
        for (let i=0; i<myFriendGroup.friends.length; i++){
            if (me.confidence < me.requiredConfidence) {
                break;
            }

            // we go first = convince()
            me.convince(friends[i])

            // are they convinced enough?
            // go to next person


            //discourage()
            // check if we are too discouraged
            console.log(friends[i]);
        }
    }
    convinceGroup()