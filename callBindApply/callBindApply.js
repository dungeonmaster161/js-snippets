//----------------------------Call function borrowing--------------------------
const userDetails = {
    name: "Shikhar Uttam",
    age:28,
    designation:"Software Engineer",
    printDetails:function(){
        console.log(this.name)
    }
}

userDetails.printDetails()

const userDetails2 = {
    name: "Abhishek Kumar",
    age:29,
    designation:"QA"
}

userDetails.printDetails.call(userDetails2); //Call will share printDetails function with userDetails2 Object


//if we want to make function generic
const objOne = {
    name:"Pankaj Saini"
}

const objTwo = {
    name: "Amit Pal"
}

function printName(cityName){
    console.log(this.name," This is name");
    console.log(cityName," From");
}

printName.call(objOne,"Delhi")
printName.call(objTwo,"Ambala",)


// --------------------Call ends-------------------------


// ---------------------Apply-----------------

//In apply we can send parameters as an array only
const applyObj = {
    name:"Harkirat Singh"
}

function applyPrintName(...address){
    console.log(this.name," Name");
    console.log(address,' This is address');
}

applyPrintName.apply(applyObj,['india','haryana','Ambala'])


// ------------------- Apply ends --------------------


// ------------------Bind function-----------------

// Bind function is similar to call function but it stores copy
// and store it in variable and call using variable

const bindFun = userDetails.printDetails.bind(userDetails2);
bindFun()