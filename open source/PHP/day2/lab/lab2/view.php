<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <?php
            var_dump($_GET);
            // echo "{$_POST['Gender']}";

            if($_GET['5'] == 'Female')
            {
                $title = "Miss";
            }
            else{
                $title = "Mr";
            }
            echo "<h1>Hello $title {$_GET['0']} {$_GET['1']} </h1>"
        ?>
        <table class="table table-bordered">
            <?php
                // Retrieve the data from the query string
                $data = $_GET;

                // Display the data in a table
                echo "<tr><th>First Name</th><td>{$data[0]}</td></tr>";
                echo "<tr><th>Last Name</th><td>{$data[1]}</td></tr>";
                echo "<tr><th>Address</th><td>{$data[2]}</td></tr>";
                echo "<tr><th>Department</th><td>{$data[3]}</td></tr>";
                echo "<tr><th>Country</th><td>{$data[4]}</td></tr>";
                echo "<tr><th>Gender</th><td>{$data[5]}</td></tr>";
                echo "<tr><th>Skills</th><td>{$data[6]}</td></tr>";
                echo "<tr><th>Username</th><td>{$data[7]}</td></tr>";
            ?>
        </table>
        <a href="javascript:history.back()" class="btn btn-secondary">Back</a>
    </div>

</body>
</html>