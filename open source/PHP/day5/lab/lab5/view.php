<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('location:login.php');
}
try {
    $userId = $_GET['id'];
    require("dbConnections.php"); 
    $db= new Db();
    $connection = $db->get_connection();

    //$stmt = $connection->prepare("SELECT * FROM users WHERE id = ?");
    //$stmt->execute([$userId]);

    $stmt=$db->get_data("users","*","","id='$userId'");
    $user = $stmt->fetch(PDO::FETCH_ASSOC);


    //$stmt = $connection->prepare("SELECT skill FROM user_skills WHERE user_id = ?");
    //$stmt->execute([$userId]);

    $stmt=$db->get_data("user_skills","skill","","user_id='$userId'");
    $skills = $stmt->fetchAll(PDO::FETCH_COLUMN);

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
    <div class="container mt-5">
        <h1>Hello <?= $title ?> <?= $user['first_name'] ?> <?= $user['last_name'] ?></h1>


        <div class="card mb-4 mx-auto rounded-circle" style="max-width: 18rem;">
            <img src="<?= !empty($user['image_name']) ? 'imgs/' . $user['image_name'] : 'imgs/default.png' ?>"
                class="card-img-top img-fluid rounded-circle" alt="User Image">
        </div>

        <table class="table table-bordered">
            <tr>
                <th>First Name</th>
                <td><?= $user['first_name'] ?></td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td><?= $user['last_name'] ?></td>
            </tr>
            <tr>
                <th>Address</th>
                <td><?= $user['address'] ?></td>
            </tr>
            <tr>
                <th>Department</th>
                <td><?= $user['department'] ?></td>
            </tr>
            <tr>
                <th>Country</th>
                <td><?= $user['country'] ?></td>
            </tr>
            <tr>
                <th>Gender</th>
                <td><?= $user['gender'] ?></td>
            </tr>
            <tr>
                <th>Skills</th>
                <td><?= !empty($skills) ? implode(", ", $skills) : "No skills listed" ?></td>
            </tr>
            <tr>
                <th>Username</th>
                <td><?= $user['username'] ?></td>
            </tr>
        </table>
    </div>
</body>

</html>