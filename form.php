<?php
$conn = new mysqli("localhost", "root", "", "signupform");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO users (username, password, email, first_name, last_name)
                        VALUES (?, ?, ?, ?, ?)");

$hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stmt->bind_param("sssss",
    $_POST['username'],
    $hashedPassword,
    $_POST['email'],
    $_POST['firstName'],
    $_POST['lastName']
);

if ($stmt->execute()) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>