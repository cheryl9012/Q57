// Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [70 , 80 ,98, 67, 88, 91, 90];

let averageGrades = grades.reduce((total, grade) => total + grade , 0) / grades.length

console.log(averageGrades)