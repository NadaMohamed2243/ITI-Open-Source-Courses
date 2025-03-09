<?php
try {
    $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");
    $userId = $_GET['id'];

    $stmt = $connection->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    var_dump($user);

    $stmt = $connection->prepare("SELECT skill FROM user_skills WHERE user_id = ?");
    $stmt->execute([$userId]);
    $skills = $stmt->fetchAll(PDO::FETCH_COLUMN); //ensures that only the skill values are returned as a plain array instead of an associative array.

    $title = ($user['gender'] == 'female') ? "Miss" : "Mr";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- database names -->
    <div class="container mt-5">
        <h1>Hello <?= $title ?> <?= $user['first_name'] ?> <?= $user['last_name'] ?></h1>
        <table class="table table-bordered">
            <tr><th>First Name</th><td><?= $user['first_name'] ?></td></tr>
            <tr><th>Last Name</th><td><?= $user['last_name'] ?></td></tr>
            <tr><th>Address</th><td><?= $user['address'] ?></td></tr>
            <tr><th>Department</th><td><?= $user['department'] ?></td></tr>
            <tr><th>Country</th><td><?= $user['country'] ?></td></tr>
            <tr><th>Gender</th><td><?= $user['gender'] ?></td></tr>
            <tr><th>Skills</th><td><?= !empty($skills) ? implode(", ", $skills) : "No skills listed" ?></td></tr>
            <tr><th>Username</th><td><?= $user['username'] ?></td></tr>
        </table>
    </div>
</body>
</html>
