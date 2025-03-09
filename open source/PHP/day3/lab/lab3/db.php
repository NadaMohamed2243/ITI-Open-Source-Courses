<?php
try {
    $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");

    $sql = "INSERT INTO users (first_name, last_name, address, country, gender, username, department) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $connection->prepare($sql);
    $stmt->execute([
        $_POST['fname'], 
        $_POST['lname'], 
        $_POST['address'], 
        $_POST['country'], 
        $_POST['Gender'], 
        $_POST['username'], 
        "Open source"
    ]);

    $user_id = $connection->lastInsertId();

    
    if (isset($_POST['Skills']) && is_array($_POST['Skills'])) {
        $sql = "INSERT INTO user_skills (user_id, skill) VALUES (?, ?)";
        $stmt = $connection->prepare($sql);

        foreach ($_POST['Skills'] as $skill) {
            $stmt->execute([$user_id, $skill]);
        }
        echo "Skills inserted successfully!<br>";
    } else {
        echo "No skills selected.<br>";
    }

    echo "User inserted successfully!";
    header("location:list.php");

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

