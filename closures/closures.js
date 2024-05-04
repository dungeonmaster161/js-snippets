//Example One
const sum = function(a){
    console.log("Live Viewers"+a);
    var c = 4
    return function(b){
        return a+b+c
    }
}

const store = sum(200)
console.log(store(4));

//Example Two

const multiply = function(a,b,c){
    return {
        getSumTwo:function(){
            return a+b
        },
        getSumThree:function(){
            return a+b+c
        }
    }
}

const val = multiply(2,3,4)
console.log(val.getSumTwo());
console.log(val.getSumThree());