<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <table class="table table-striped">
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Address</td>
            <td>Department</td>
            <td>Country</td>
            <td>Gender</td>
            <td>Skills</td>
            <td>Username</td>
            <td>Action</td>
        </tr>

        <?php
            $data = file("data.txt");
            if(count($data) > 0){
            foreach ($data as $index => $row){
                $row = trim($row);

                // Skip empty lines (specially the first one)
                if (empty($row)) {
                    continue;
                }
                // $row=Nadaaa-Mohamed-talkha-eldakahlya-eygpt-Open source-Canada-Female-php, mySql-Nada_Mohamed2243
                $info=explode("-",$row);

                // Create a query string from the row data
                $queryString = http_build_query($info);


                echo "<tr>";
                foreach($info as $val){
                    echo "<td>$val</td>";
                }
                echo '<td><a href="view.php?' . $queryString . '" class="btn btn-primary">view</a>
                          <a href="delete.php?index=' . $index . '" class="btn btn-danger">Delete</a>
                      </td>';
                echo "</tr>";
            }
        }
        ?>

    </table>
</body>
</html>