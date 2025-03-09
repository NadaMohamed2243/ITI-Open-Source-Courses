<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

            <?php
            try {
                $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");

                $sql = "
                    SELECT users.id, users.first_name, users.last_name, users.address, users.department,
                    users.country, users.gender, users.username, 
                    GROUP_CONCAT(user_skills.skill SEPARATOR ', ') AS skills 
                    FROM users
                    LEFT JOIN user_skills ON users.id = user_skills.user_id
                    GROUP BY users.id
                ";

                $stmt = $connection->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_NUM);

                foreach ($users as $user) {

                    echo "<tr>";

                    foreach (array_slice($user, 1, -1) as $value) {
                        echo "<td>$value</td>";
                    }
                    echo "<td>" . ($user[array_key_last($user)] ?: 'No Skills') . "</td>";
                    echo "<td>
                            <a href='view.php?id={$user[0]}' class='btn btn-primary'>View</a>
                            <a href='edit.php?id={$user[0]}' class='btn btn-warning'>Edit</a>
                            <a href='delete.php?id={$user[0]}' class='btn btn-danger'>Delete</a>
                          </td>";
                
                    echo "</tr>";
                }
            } catch (PDOException $e) {
                echo "<tr><td colspan='9' class='text-danger text-center'>Connection failed: " . $e->getMessage() . "</td></tr>";
            }
            ?>

            </tbody>
        </table>
    </div>
</body>
</html>
