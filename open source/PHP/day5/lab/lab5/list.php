<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <?php
    session_start();
    if (!isset($_SESSION['username'])) {
        header('location:login.php');
    }

    require("dbConnections.php");
    $db = new Db();

    ?>
    <div class="container mt-4">
        <h2 class="text-center mb-3">Users List</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>Username</th>
                    <th>Skills</th>
                    <th>image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                <?php
                try {
                    $connection = $db->get_connection();

                    // $sql = "
                    //     SELECT users.id, users.first_name, users.last_name, users.address, users.department,
                    //     users.country, users.gender, users.username, 
                    //     GROUP_CONCAT(user_skills.skill SEPARATOR ', ') AS skills, users.image_name
                    //     FROM users
                    //     LEFT JOIN user_skills ON users.id = user_skills.user_id
                    //     GROUP BY users.id
                    // ";
                
                    //$stmt = $connection->prepare($sql);
                    // $stmt->execute();
                
                    $sql = "users.id, users.first_name, users.last_name, users.address, users.department,users.country, users.gender, users.username, GROUP_CONCAT(user_skills.skill SEPARATOR ', ') AS skills, users.image_name";

                    $joins = "LEFT JOIN user_skills ON users.id = user_skills.user_id";

                    $extra = "GROUP BY users.id";

                    $stmt = $db->get_data("users", $sql, $joins, "1", $extra);
                    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

                    // print_r($users);


                    foreach ($users as $user) {
                        echo "<tr>";


                        foreach ($user as $key => $value) {
                            if ($key === "image_name") {
                                echo "<td><img src='imgs/$value' width='150' height='100' alt='User Image'/></td>";
                            } elseif ($key !== "id") {
                                echo "<td>$value</td>";
                            }
                        }

                        echo "<td>
                                <a href='view.php?id={$user['id']}' class='btn btn-primary'>View</a>
                                <a href='edit.php?id={$user['id']}' class='btn btn-warning'>Edit</a>
                                <a href='delete.php?id={$user['id']}' class='btn btn-danger'>Delete</a>
                            </td>";

                        echo "</tr>";
                    }
                } catch (PDOException $e) {
                    echo "<tr><td colspan='10' class='text-danger text-center'>Connection failed: " . $e->getMessage() . "</td></tr>";
                }
                ?>


            </tbody>
        </table>
        <form action="logout.php" method="post" class="text-center mb-3 ">
            <button type="submit" class="btn btn-danger w-100">Logout</button>
        </form>
    </div>
</body>

</html>