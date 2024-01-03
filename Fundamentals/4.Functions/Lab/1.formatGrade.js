function formatGrade(grade) {
    /* Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade
     and description.
    •	< 3.00 - "Fail"
    •	>= 3.00 and < 3.50 - "Poor"
    •	>= 3.50 and < 4.50 - "Good"
    •	>= 4.50 and < 5.50 - "Very good"
    •	>= 5.50 - "Excellent"
    */
    let formated = grade.toFixed(2);
    let grade1;
    if (grade < 3) {
        formated = '2'
        grade1 = "Fail";
    } else if (grade < 3.50) {
        grade1 = "Poor";
    } else if (grade < 4.50) {
        grade1 = "Good"
    } else if (grade < 5.50) {
        grade1 = "Very good"
    } else {
        grade1 = "Excellent"
    }
    console.log(`${grade1} (${formated})`);
}
formatGrade(2.99)