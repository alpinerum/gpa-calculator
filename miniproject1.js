function calculateGPA(arr) {
    var i = 0;
    var sum = 0;
    for (i; i < arr.length; i++) {
        if (arr[i] === 'A' || arr[i] === 'B' || arr[i] === 'C') {
            if (arr[i] == 'A') {
                sum+=100;
            }
            else if(arr[i] == 'B') {
                sum+=80;
            }
            else {
                sum+=70;
            }
        }
        else {
            console.log("Invalid grades");
            break;
        }

    }
    i = 0;
    var avg = sum/arr.length;
    var grade;
    if (avg > 80) {
        grade = "A";
    }
    else if (80 >= avg > 70) {
        grade = "B";
    }
    else {
        grade = "C";
    }
    document.write("<h1> Your GPA is " + grade + "</h1>");
}