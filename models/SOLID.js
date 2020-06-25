//BAD
// S
class UserSetting {
    constructor(user) {
        this.user = user;
    }

    changeSettings(settings) {
        if(this.verifyCredentials()) {
            //....
        }
    }

    verifyCredentials() {
        // ...
    }
}

//GOOD
class UserAuth {
    constructor(user){
        this.user = user;
    }
    verifyCredentials() {
        //......
    }
}

class UserSetting {
    constructor(user){
        this.settings = user;
        this.auth = new UserAuth(user);
    }

    changeSettings(settings){
        if(this.auth.verifyCredentials()){
            // ....
        }
    }
}

//O
// BAD

var iceCreamFlavors=["chocolate", "vanilla", "steven"];
var iceCreamMaker={
    makeIceCream (flavor) {
        if(iceCreamFlavors.indexOf(flavor)>-1){
            console.log("Great success. You now have ice cream.")
        } else{
            console.log("Epic fail. No ice cream for you")
        }
    }
}
export default iceCreamMaker;

//GOOD
var iceCreamFlavors=["chocolate","vanilla"];
var iceCreamMaker={
    makeIceCream(flavor) {
        if(iceCreamFlavors.indexOf(flavor)>-1){
            console.log("You have a cake")
        }else{
            console.log("Failed to get one")
        }
    },
    addFlavor(flavor){
        iceCreamFlavors.push(flavor);
    }
}
export default iceCreamMaker