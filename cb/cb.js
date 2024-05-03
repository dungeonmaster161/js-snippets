const datas = [
    {
        name:"Shikhar Uttam",
        profession:"SDE II"
    },
    {
        name:"Amit Pal",
        profession:"Software Engineer"
    }
]


function getUsers(){
    setTimeout(()=>{
        datas.forEach((data,index)=>{
            console.log(`${index+1} ${data.name} (${data.profession})`);
        })
    },2000)
}

function addUser(user,cb){
    setTimeout(()=>{
        datas.push(user);
        cb()
    },4000)
}

addUser({name:'Pankaj Saini',profession:'Senior funllstack engineer'},getUsers)


