let numbers = [1, 2, 3, 4, 5]; // Define an array of numbers
let listHTML = ""; // Initialize an empty string to store the list items in HTML format

for (let i = 0; i < numbers.length; i++) {
    // For each number, create an <li> element with the index and value
    listHTML += "<li>Number at index " + i + " is " + numbers[i] + "</li>";
    // This line adds a new <li> item for each number to the listHTML string
    }

    // Once the loop is complete, set the innerHTML of the element with id "numberList" to the listHTML string
document.getElementById("numberList").innerHTML = listHTML;
    // This updates the content of the <h1> element with the id "numberList" to display the list of numbers 