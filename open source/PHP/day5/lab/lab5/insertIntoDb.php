<?php
require("dbConnections.php");
$db = new Db();
$connection = $db->get_connection();

if (isset($_POST['register'])) {
    var_dump($_FILES);

    try {
        $f_name = validate($_POST['fname']);
        $l_name = validate($_POST['lname']);
        $address_add = validate($_POST['address']);
        $country_con = validate($_POST['country']);
        $Gender_g = validate($_POST['Gender']);
        $user_name = validate($_POST['username']);
        $department_d = "Open source";
        $password_p = validate($_POST['password']);

        $errors = [];

        if (empty($f_name) || strlen($f_name) < 2) {
            $errors["f_name"] = "Invalid first name";
        }
        if (empty($l_name) || strlen($l_name) < 2) {
            $errors["l_name"] = "Invalid last name";
        }
        if (empty($address_add) || strlen($address_add) < 2) {
            $errors["address_add"] = "Invalid address";
        }
        if (empty($country_con)) {
            $errors["country_con"] = "You should choose a country";
        }
        if (empty($Gender_g)) {
            $errors["Gender_g"] = "You should choose a gender";
        }
        if (!preg_match('/^[a-zA-Z0-9_]{3,20}$/', $user_name)) {
            $errors["user_name"] = "Invalid username! Only letters, numbers, and underscores are allowed (3-20 characters).";
        }
        if (empty($password_p) || strlen($password_p) < 8) {
            $errors["password_p"] = "Invalid password";
        }

        if (!isset($_POST['Skills']) || !is_array($_POST['Skills']) || count($_POST['Skills']) === 0) {
            $errors["skills"] = "You should choose at least one skill.";
        }

        if (!isset($_FILES["image"]) || $_FILES["image"]["size"] < 40000 || !move_uploaded_file($_FILES["image"]["tmp_name"], "imgs/" . $_FILES["image"]["name"])) {
            $errors["image"] = "Invalid image";
        }

        if (count($errors) > 0) {
            $data = json_encode($errors);
            header("location:myform.php?errors=" . $data);
            exit();
        } else {
            // Insert user data
            //$sql = "INSERT INTO users (first_name, last_name, address, country, gender, username, department, password, image_name) 
            //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            //$stmt = $connection->prepare($sql);
            //$stmt->execute([
            //    $f_name,
            //     $l_name,
            //     $address_add,
            //     $country_con,
            //     $Gender_g,
            //     $user_name,
            //     $department_d,
            //     $password_p,
            //     $_FILES["image"]["name"]
            //]);
            $imageName = $_FILES["image"]["name"];
            $stmt = $db->insert_data("users", "first_name, last_name, address, country, gender, username, department, password, image_name", "'$f_name','$l_name','$address_add','$country_con','$Gender_g','$user_name','$department_d','$password_p','$imageName'");

            $user_id = $connection->lastInsertId();


            if (isset($_POST['Skills']) && is_array($_POST['Skills'])) {
                //$sql = "INSERT INTO user_skills (user_id, skill) VALUES (?, ?)";
                //$stmt = $connection->prepare($sql);

                foreach ($_POST['Skills'] as $skill) {
                    // $stmt->execute([$user_id, $skill]);
                    $stmt = $db->insert_data("user_skills", "user_id, skill", "'$user_id', '$skill'");
                }
            }

            header("location:login.php");
        }
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}

if (isset($_POST['login'])) {
    $user_name = $_POST['username'];
    $password_p = $_POST['password'];
    $stm = $db->get_data("users", "*","","username='$user_name' AND password='$password_p'");

    if ($data = $stm->fetch(PDO::FETCH_ASSOC)) {
        session_start();
        $_SESSION['username'] = $data['username'];
        $_SESSION['password'] = $data['password'];
        echo "done";
        header("location:list.php");
    } else {
        echo "error";
        header("location:login.php?error=1");
    }
    exit();
}

function validate($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>