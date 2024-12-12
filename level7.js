//try to change the value of "number" by erasing 10 and writing a different number and observe the different output
let number = 10;
// This says that sets the initial value of the variable "number" to 10
if (number > 5) {
    // If the value of "number" is greater than 5, this block of code will run
    document.getElementById("message").innerHTML = "Number is greater than 5";
    // Updates the content of the element with id "message" to display "Number is greater than 5"
} else {
    // If the value of "number" is 5 or less, this block of code will run
    document.getElementById("message").innerHTML = "Number is 5 or less";
    // Updates the content of the element with id "message" to display "Number is 5 or less"
}