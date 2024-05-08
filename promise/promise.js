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
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(user);
            const error = false
            if(error) reject("Reject is called")
            resolve()
        },4000)
    })
   
}

const ob =  addUser({name:'Pankaj Saini',profession:'Senior funllstack engineer'})
.then(getUsers)
.catch(err=>console.log(err))

