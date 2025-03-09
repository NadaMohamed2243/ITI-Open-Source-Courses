<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // delete.php

        // Get the index of the row to delete
        $index = $_GET['index'];

        // echo $index;

        $data = file("data.txt");

        //  echo $data[$index];

        if (isset($data[$index])) {
            unset($data[$index]);
            file_put_contents("data.txt", implode("", $data)); // Save the updated data back to the file
        }

        header("Location: list.php");

    ?>
</body>
</html>