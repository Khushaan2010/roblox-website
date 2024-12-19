document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send the data to the server using fetch API
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }) // Send the data as JSON
    })
    .then(response => response.text()) // Assuming the server responds with a simple text
    .then(data => {
        console.log("Response from server:", data); // You can also show the response to the user
    })
    .catch(error => {
        console.error("Error:", error);
    });

    // Clear the form
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
