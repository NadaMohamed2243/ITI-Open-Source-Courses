<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <?php
    $errors = [];
    if (isset($_GET['errors'])) {
        $errors = json_decode($_GET['errors'], true);
    }
    ?>
    <form action="db.php" method="post" enctype='multipart/form-data'>
        <h1 class='text-center m-3'>Welcome</h1>
        <div class="mb-3">
            <label for="fname" class="form-label">First Name</label>
            <input id="fname" type="text" name="fname" placeholder="First Name" class="form-control">
            <?php
            if (isset($errors['f_name'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['f_name'] . "</div>";
            }
            ?>
        </div>
        <div class="mb-3">
            <label for="lname" class="form-label">Last Name</label>
            <input id="lname" type="text" name="lname" placeholder="Last Name" class="form-control">
            <?php
            if (isset($errors['l_name'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['l_name'] . "</div>";
            }
            ?>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" name="address"></textarea>
            <?php
            if (isset($errors['address_add'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['address_add'] . "</div>";
            }
            ?>
        </div>

        <fieldset>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Department</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Open source"
                    name="department" value="Open source" readonly="readonly">
            </div>
        </fieldset>

        <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <select class="form-select" id="country" name="country">
                <option disabled selected>Select Country</option>
                <option value="Egypt">Egypt</option>
                <option value="Canada">Canada</option>
                <option value="Korea">Korea</option>
            </select>
            <?php
            if (isset($errors['country_con'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['country_con'] . "</div>";
            }
            ?>
        </div>

        <div class="mb-3">
            <label class="form-label">Gender</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="Male" value="Male">
                <label class="form-check-label" for="Male">Male</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="Female" value="Female">
                <label class="form-check-label" for="Female">Female</label>
            </div>
            <?php
            if (isset($errors['Gender_g'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['Gender_g'] . "</div>";
            }
            ?>
        </div>

        <div class="mb-3">
            <label class="form-label">Skills</label>
            <div class="form-check">
                <input type="checkbox" id="php" name="Skills[]" value="php">
                <label for="php">PHP</label>
            </div>
            <div class="form-check">
                <input type="checkbox" id="mySql" name="Skills[]" value="mySql">
                <label for="mySql">MySQL</label>
            </div>
            <?php
            if (isset($errors['skills'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['skills'] . "</div>";
            }
            ?>
        </div>

        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="text" name="username" placeholder="Username" class="form-control">
            <?php
            if (isset($errors['user_name'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['user_name'] . "</div>";
            }
            ?>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" class="form-control">
            <?php
            if (isset($errors['password_p'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['password_p'] . "</div>";
            }
            ?>
        </div>

        <div class="mb-3">
            <label for="image" class="form-label">image</label>
            <input id="image" type="file" name="image" placeholder="image" class="form-control">
            <?php
            if (isset($errors['image'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>" . $errors['image'] . "</div>";
            }
            ?>
        </div>

        <button type="submit" class="btn btn-primary" value="register" name="register">Submit</button>
    </form>
</body>

</html>