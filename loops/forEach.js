const companies = [
    {
        name: "Tech Innovations Ltd.",
        category: "Information Technology",
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


companies.forEach((element,index) => {
    console.log(element.name);
});