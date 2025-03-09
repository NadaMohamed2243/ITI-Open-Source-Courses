<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    session_start();
    if (!isset($_SESSION['username'])) {
        header('location:login.php');
    }
    $userId = $_GET['id'];

    require("dbConnections.php"); 
    $db= new Db();

    try {
        $stmt = $db->delete_data("user_skills","user_id = $userId");
        //$stmt = $connection->prepare("DELETE FROM user_skills WHERE user_id = ?");
        //$stmt->execute([$userId]);

        $stmt = $db->delete_data("users","id = $userId");
        //$stmt = $connection->prepare("DELETE FROM users WHERE id = ?");
        //$stmt->execute([$userId]);

        header("Location:list.php");
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }



    ?>
</body>

</html>