/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.*/

var mark_Mass = 95;
var mark_Height = 1.88;
var john_Mass = 85;
var john_Height = 1.76;
var mark_BMI;
var john_BMI;


// var mark_Mass = prompt('What is Mark\'s Mass?');
// var mark_Height = prompt('What is Mark\'s Height?');
// var john_Mass = prompt('What is John\'s Mass?');
// var john_Height = prompt('What is John\'s Height?');

// mark_Mass = parseFloat(mark_Mass);
// mark_Height = parseFloat(mark_Height);
// john_Mass = parseFloat(john_Mass);
// john_Height = parseFloat(john_Height);


mark_BMI = mark_Mass / (mark_Height * mark_Height);
john_BMI = john_Mass / (john_Height * john_Height);

var markBiggerBMI = mark_BMI > john_BMI;

console.log("Coding Challenge #1");
console.log('Mark has a higher BMI than John: ', markBiggerBMI);

console.log(mark_BMI, john_BMI);

/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

console.log("Coding Challenge #2");
if (markBiggerBMI) {
    console.log('Mark\'s BMI (' + mark_BMI.toFixed(1) + ') is bigger than John\'s (' + john_BMI.toFixed(1) + ')');
} else {
    console.log('John\'s BMI (' + john_BMI.toFixed(1) + ') is bigger than Mark\'s (' + mark_BMI.toFixed(1) + ')');
}


