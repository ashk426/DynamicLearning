<?php
// Step 1: Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Step 2: Connect to your database
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "sign_up";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Step 3: Retrieve input data from the form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Step 4: Sanitize and validate the input data
    $username = mysqli_real_escape_string($conn, $username);
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    // Step 5: Insert data into the database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to welcome page if data added successfully
        header("Location: welcome.html");
        exit(); // Make sure to exit after sending the header to prevent further execution
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
