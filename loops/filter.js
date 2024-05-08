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

const ages = [1,2,3,4,5,6,7,8,9,10,11,12]

const filterAge = ages.filter(function(age){
    if(age > 5){
       return true
    }
})

const filteredCompanies = companies.filter((data)=>(data.category == "Data Science"))

console.log(filterAge);

console.log(filteredCompanies," Service based companies");