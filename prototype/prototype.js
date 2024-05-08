// ways to declare object
// const obj = new Object({
//     name:"Shikhar uttam"
// })

// const ob = new obj();

const o = {
    name:"Manan punj"
}


const ob = {
    roll:1,
    __proto__:o
}

console.log(ob.name);