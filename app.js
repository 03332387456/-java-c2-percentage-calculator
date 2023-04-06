// var English = prompt ("enter your English marks")
// var maths = prompt ("enter your maths marks")
// var Physics = prompt ("enter your Physics marks")

// function percentage( num1 , num2 , num3)
// {  var x = num1 + num2 + num3
// var y  = x / 3 * 100 
// return y  }

// var total = percentage (English , maths , Physics )
// document.write ("YOUR TOTAL PERCENTAGE IS" = + total + "%" )


// var English = prompt("Enter your English marks");
// var maths = prompt("Enter your maths marks");
// var Physics = prompt("Enter your Physics marks");

// function percentage(num1, num2, num3) {
//   var x = num1 + num2 + num3;
//   var y = x / 3 * 100;
//   return y;
// }

// var total = percentage(English, maths, Physics);
// document.write("YOUR TOTAL PERCENTAGE IS " + total + "%");



var English = prompt("Enter your English marks");
var maths = prompt("Enter your maths marks");
var Physics = prompt("Enter your Physics marks");

function percentage(num1, num2, num3) {
  var totalMarks = 300; // total marks in the three subjects
  var obtainedMarks = +(num1) + +(num2) + +(num3);
  var percentage = (obtainedMarks / totalMarks) * 100;
  return percentage;
}

var total = percentage(English, maths, Physics);
document.write("YOUR TOTAL PERCENTAGE IS " + total.toFixed(2) + "%");



      