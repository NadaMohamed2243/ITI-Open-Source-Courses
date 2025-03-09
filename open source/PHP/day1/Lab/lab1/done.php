<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        var_dump($_POST);
        // echo "{$_POST['Gender']}";

        if($_POST['Gender'] == 'Female')
        {
            $title = "Miss";
        }
        else{
            $title = "Mr";
        }
        echo "<h1>Thanks $title {$_POST['fname']} {$_POST['lname']} </h1>"
    ?>
    <h2>Please review your information</h2>
    <?php
        echo "<h4>Name : {$_POST['fname']} {$_POST['lname']} </h4>";
        echo "<h4>Address : {$_POST['address']} </h4>";
        // echo "<h4>Your Skills : {$_POST['Skills'][0]} </h4>";
        echo "<h4>Your Skills :</h4>";
        for ($i = 0; $i < count($_POST['Skills']); $i++) {
            echo "<h4>{$_POST['Skills'][$i]}</h4>";
        }
        echo "<h4>Department : {$_POST['department']} </h4>";
    ?>
</body>
</html>