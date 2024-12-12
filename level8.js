function greet(name) { // Define a function called "greet" that takes a parameter 'name'
    document.getElementById("message").innerHTML = "Hello, " + name;
    // It conects "Hello, " with the value of the 'name' parameter and sets it as the inner HTML of the element
}

// Call the greet function and pass the string "John" as an argument
greet("John");
// This will display "Hello, John" in the HTML element with the id "message"