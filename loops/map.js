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

const company =  companies.map(function(companies,index){
    return companies.name
})

console.log(company,' --- coampany');