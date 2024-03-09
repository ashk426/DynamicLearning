<?php
// Database connection parameters
$servername = "ylocalhost";
$username = "root";
$password = "root";
$database = "sign_up";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data from the JSON payload
    $data = json_decode(file_get_contents("php://input"));

    // Extract individual form fields
    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $email = $data->email;
    $phone = $data->phone;
    $degree = $data->degree;
    $subject = $data->subject;
    $address = $data->address;
    $acknowledge = $data->acknowledge ? 1 : 0; // Convert checkbox value to integer

    // Prepare SQL statement to insert data into the database
    $sql = "INSERT INTO instructor_signup (first_name, last_name, email, phone, degree, subject, address, acknowledge)
            VALUES ('$firstName', '$lastName', '$email', '$phone', '$degree', '$subject', '$address', $acknowledge)";

    if ($conn->query($sql) === TRUE) {
        // Data inserted successfully
        echo json_encode(array("status" => "success"));
    } else {
        // Error occurred during data insertion
        echo json_encode(array("status" => "error", "message" => $conn->error));
    }
}

// Close database connection
$conn->close();
?>
