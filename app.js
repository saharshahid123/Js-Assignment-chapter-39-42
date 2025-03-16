// JS-ASSIGNMENT CHAPTER 39-42

// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

// Question 1
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

//answer:
// function power(num, power) {
//     var power = num ** power;
//     return power
// }

// var a = +prompt('Enter number ');
// var b = +prompt('Enter  power');
// var power = power(a, b);
// document.write(a + '<sup>' + b + '</sup>' + 'is ' + power)

// Question 2
//Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

//answer:
// let userYear = prompt('Enter the year');
// switch (userYear) {
//     case '2012':
//         alert('Leap Year')
//         break;
//     case '2016':
//         alert('Leap Year')
//         break;
//     case '2020':
//         alert('Leap Year')
//         break;

//     default:
//         alert('Not a leap year')

// }

// Question 3
//If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given
// by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

//answer:
// function area(s1, s2, s3) {
//     let S = findS(s1, s2, s3)
//     let areaValue = Math.sqrt(S * (S - s1) * (S - s2) * (S - s3))
//     return areaValue
// }

// function findS(a, b, c) {
//     return (a+b+c) / 2
// }
// let a = +prompt("Enter length a")
// let b = +prompt("Enter length b")
// let c = +prompt("Enter length c")

// if (a + b > c && a + c > b && b + c > a) {
//     var result = area(a, b, c);
//     document.write('The area of the triangle is ' + result.toFixed(2));
// } else {
//     document.write('Invalid triangle sides');
// }

//Question 4
//  Write a function that receives marks received by a student in 3 subjects and returns the average and percentage
// of these marks. there should be 3 functions one is the mainFunction and other are for average and
// percentage. Call those functions from MainFunction and display result in mainFunction.

//answer:
// function mainFunction() {
//         let englishMarks = +prompt("enter your marks in subject 1");
//         let urduMarks = +prompt("enter your marks in subject 2");
//         let mathsMarks = +prompt("enter your marks in subject 3");
//         let totalMarks = +prompt("enter total marks");
//         let averageValue = averageMarks(englishMarks, urduMarks, mathsMarks);
//         let percentValue = percentage(englishMarks, urduMarks, mathsMarks, totalMarks);
//         document.write("The average marks are " + averageValue);
//         document.write("<br />" + "Percentage: " + percentValue);
//     }
//     function averageMarks(a, b, c) {
//         let average = (a + b + c) / 3;
//         average = average.toFixed(2);
//         return average;
//     }
//     function percentage(a, b, c, totalMarks) {
//         let percent = ((a + b + c) / totalMarks) * 100;
//         percent = percent.toFixed(2);
//         return percent;
//     }
//     mainFunction();
    
    // Question 5 
    // You have learned the function indexOf. Code your own custom
    // function that will perform the same functionality. You can code
    // for single character as of now.

    // answer:
    // function findingIndex(string,userValue){
    //     let indexing;
    //     for(let i=0;i<string.length;i++){
    //         if(string[i] === userValue){
    //             indexing = i;
    //             break;
    //         }
    //     }
    //     return indexing;
    // }
    
    // let string = "I'm Sahar Shahid";
    // let userInput = prompt("enter a character to get its index number");
    // let IndexNum = findingIndex(string,userInput);
    // document.write("The index number of " + userInput + " is " + IndexNum)
    
    // Question 6 
    // Write a function to delete all vowels from a sentence. Assume
    // that the sentence is not more than 25 characters long.
    // answer:
    
    // let userInput = prompt("enter a line less than 25 character long")
    // function vowelElimination() {
    //     let removingChar = "";
    //     for (let i = 0; i < userInput.length; i++) {
    //         if (userInput[i] == "a" || userInput[i] == "A" || userInput[i] == "e" || userInput[i] == "E" || userInput[i] == "I" || userInput[i] == "i" || userInput[i] == "O" || userInput[i] == "o" || userInput[i] == "U" || userInput[i] == "u") {
    //             continue
    //         }
    //         else {
    //             removingChar = removingChar + userInput[i]
    //         }
    //     }
    //     return removingChar;
    // }
    
    // let result = vowelElimination();
    // document.write("Before: " + userInput + "<br />" + "After: " + result)
    
    // Question 7 
    
    // Question 8 
    // The distance between two cities (in km.) is input through the
    // keyboard. Write four functions to convert and print this
    // distance in meters, feet, inches and centimeters.

    // answer:
    // let distance = +prompt("enter the distance in KM to convert in lower units");
    // inMeters(distance)
    // inFeet(distance)
    // inInches(distance)
    // inCentimeters(distance)
    // function inMeters(dist) {
    //     let meterDistance = dist * 1000;
    //     document.write("The distance from A to B is: " + meterDistance)
    // }
    
    // function inFeet(dist){
    //     let feetDistance = dist * 3281;
    //     document.write("<br />" + "The distance from A to B is: " + feetDistance)
    // }
    
    // function inInches(dist){
    //     let inchesDistance = dist * 39370;
    //     document.write("<br />" + "The distance from A to B is: " + inchesDistance)
    // }
    
    // function inCentimeters(dist){
    //     let centimetersDistance = dist * 100000;
    //     document.write("<br />" + "The distance from A to B is: " + centimetersDistance)
    // }
    
    // Question 9 
    // Write a program to calculate overtime pay of employees.
    // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
    // worked above 40 hours. Assume that employees do not work
    // for fractional part of an hour.

    // answer:
    // let workingHours = +prompt("enter your working hours");
    // let extraPayPerHour = 12
    // let overTime;
    // let overTimePay;
    
    // if (workingHours > 40) {
    //     overTime = workingHours - 40;
    //     overTimePay = overTime * extraPayPerHour;
    //     alert("your overtime pay of " + overTime + " hours is " + overTimePay)
    // }
    // else {
    //     alert("you need to work more to get overtime pay")
    // }
    
    // Question 10 
    // A cashier has currency notes of denominations 10, 50 and
    // 100. If the amount to be withdrawn is input through the
    // keyboard in hundreds, find the total number of currency notes
    // of each denomination the cashier will have to give to the
    // withdrawer

    // answer:
    // let amount = +prompt("Enter amount to Withdraw")
    // let hundredNotes = parseInt(amount / 100)
    // let fiftyNotes = parseInt((amount % 100) / 50)
    // let tenNotes = parseInt((((amount % 100) % 50) / 10))
    
    // document.write("Entered amount: " + amount + "<br />");
    // document.write("You will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.")
    
    //                            X ---------------- X ----------------- X ---------------------X ---


    
    