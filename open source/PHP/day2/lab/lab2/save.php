<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_POST["register"])){

            // Remove the "register" key from the $_POST array
            unset($_POST["register"]);
            unset($_POST["password"]);
            // $data=$_POST;

            //convert all POST data to strings
            //Without this the skills which is already an array will be stored as array

            function ConvertArrayToString($item)
            {
                return is_array($item) ? implode(", ", $item) : $item;
            }

            $data = array_map('ConvertArrayToString', $_POST);

            $data=implode("-",$data);

            file_put_contents("data.txt",$data."\n",FILE_APPEND);


            echo "$data";
            header("Location:list.php");
        }
        else{
            header("Location:myform.php");
        }
    ?>
</body>
</html>