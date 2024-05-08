// ways to declare object
// const obj = new Object({
//     name:"Shikhar uttam"
// })

// const ob = new obj();

const o = {
    name:"Manan punj",
    getName:function(){
        return this.name
    },
    getRoll:function(){
        return this.roll
    }
}


const ob = {
    roll:1,
    __proto__:o
}

const obj3= {
    class:"MCA",
    __proto__:ob
}

console.log(ob);
console.log(ob.name);
console.log(ob.getName());
console.log(ob.getRoll());
console.log(obj3.getName());
Array.prototype.getName = function(){
    console.log("Shikhar uttam is my name");
}


const a = [1,2]

a.getName()

