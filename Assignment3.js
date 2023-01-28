
// console.log(findGradeLevel("Alex", "95"));
// console.log(findGradeLevel("Piter", "82"));
// console.log(findGradeLevel("Ashley", "73"));
// console.log(findGradeLevel("Bob", "65"));
// console.log(findGradeLevel("Fill", "54"));
// console.log(findGradeLevel("Jon", "45"));
// console.log(findGradeLevel("Leo", "103"));

// function findGradeLevel(name, marks) {
//     if (marks >= 91 && marks <= 100) {
//         if else (marks >= 81 && marks <= 90),
//             marks >= 71, marks <= 80, marks <= 0 && marks >= 100, marks >= 0 && marks <= 50);
//         {
//             console.log(name + " you have received S grade")
//             console.log(name + " you have received A grade")
//             console.log(name + " you have received B grade")
//             console.log(name + " you have received C grade")
//             console.log(name + " you have received D grade")
//             console.log(name + " Student has failed")
//             console.log(name + " Invalid marks")

//         }
//     }



// findGradeLevel("Alex", "95");

// function findGradeLevel(name, marks) {
//     if (marks >= 91 && marks <= 100);
//     console.log(name + " you have received S grade")
// }

findGradeLevel("Alex", "95");
findGradeLevel("Piter", "82");
findGradeLevel("Ashley", "73");
findGradeLevel("Bob", "65");
findGradeLevel("Fill", "54");
findGradeLevel("Jon", "45");
findGradeLevel("Leo", "103");

function findGradeLevel(name, marks) {
    if (marks >= 90 && marks <=100) {
        console.log(name + " you have received S grade")
    } else if (marks >= 80 && marks <= 90) {
        console.log(name + " you have received A grade")
    } else if (marks >= 70 && marks <= 80) {
        console.log(name + " you have received B grade")
    } else if (marks >= 60 && marks <= 70) {
        console.log(name + " you have received C grade")
    } else if (marks >= 50 && marks <= 60) {
        console.log(name + " you have received D grade")
    } else if (marks >= 0 && marks <= 50) {
        console.log(name + " Student has failed")
    } else {(marks >= 100 && marks <= 0)
    console.log(name + " Invalid marks")
}

}
