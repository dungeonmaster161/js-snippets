const companies = [
    {
        name: "Tech Innovations Ltd.",
        category: "Data Science",
        start: 2008,
        end: 2019
    },
    {
        name: "Digital Marketing Solutions Inc.",
        category: "Marketing",
        start: 2011,
        end: 2023
    },
    {
        name: "Byte Systems Corporation",
        category: "Software Development",
        start: 2006,
        end: 2022
    },
    {
        name: "Data Analytics Co.",
        category: "Data Science",
        start: 2014,
        end: 2025
    }
];



const sortedComapaniesYearStart = companies.sort((a,b)=>{
    if(a.start > b.start){ // > sort in ascending order
        return 1
    }else{
        return -1
    }
}) //we have to send 1 and -1 in case we want to sort object

console.log(sortedComapaniesYearStart," Sorted Companies");

const ages = [1,2,3,4,5,6,7,8,9,10,11,12]


const sortedAges = ages.sort((a,b)=>b-a) // b-a descending , a-b ascending

console.log(sortedAges," Sorted ages");