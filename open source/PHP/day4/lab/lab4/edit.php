<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('location:login.php');
}

try {
    $userId = $_GET['id'];
    $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");
    $stmt = $connection->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = $connection->prepare("SELECT skill FROM user_skills WHERE user_id = ?");
    $stmt->execute([$userId]);
    $skills = $stmt->fetchAll(PDO::FETCH_COLUMN);

    // Handle form submission
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $errors = [];

        $fname = validate($_POST['fname']);
        $lname = validate($_POST['lname']);
        $address = validate($_POST['address']);
        $country = validate($_POST['country']);
        $gender = validate($_POST['Gender']);
        $username = validate($_POST['username']);
        $password = validate($_POST['password']);
        $selectedSkills = $_POST['Skills'] ?? [];

        // Validate inputs
        if (empty($fname) || strlen($fname) < 2) {
            $errors["fname"] = "Invalid first name";
        }
        if (empty($lname) || strlen($lname) < 2) {
            $errors["lname"] = "Invalid last name";
        }
        if (empty($address) || strlen($address) < 2) {
            $errors["address"] = "Invalid address";
        }
        if (empty($country)) {
            $errors["country"] = "You should choose a country";
        }
        if (empty($gender)) {
            $errors["gender"] = "You should choose a gender";
        }
        if (!preg_match('/^[a-zA-Z0-9_]{3,20}$/', $username)) {
            $errors["username"] = "Invalid username! Only letters, numbers, and underscores are allowed (3-20 characters).";
        }
        if (empty($password) || strlen($password) < 8) {
            $errors["password"] = "Invalid password";
        }
        if (!isset($_POST['Skills']) || !is_array($_POST['Skills']) || count($_POST['Skills']) === 0) {
            $errors["skills"] = "You should choose at least one skill.";
        }

        // Handle image upload
        $imageName = $user['image_name']; // Keep the old image by default
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            $fileType = $_FILES['image']['type'];

            if (!in_array($fileType, $allowedTypes)) {
                $errors["image"] = "Invalid image type. Only JPEG, PNG, and GIF are allowed.";
            } else {
                // Delete the old image if it exists
                if (!empty($user['image_name']) && file_exists("imgs/" . $user['image_name'])) {
                    unlink("imgs/" . $user['image_name']);
                }

                // Generate a unique name for the new image
                $imageName = uniqid() . '_' . basename($_FILES['image']['name']);
                $uploadPath = "imgs/" . $imageName;

                // Move the uploaded file to the target directory
                if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadPath)) {
                    $errors["image"] = "Failed to upload image.";
                }
            }
        }

        if (count($errors) > 0) {
            // Pass errors back to the form
            $errorQuery = http_build_query(['errors' => $errors]);
            header("location:edit.php?id=$userId&$errorQuery");
            exit();
        } else {
            // Update user data
            $stmt = $connection->prepare("UPDATE users SET first_name = ?, last_name = ?, address = ?, country = ?, gender = ?, username = ?, password = ?, image_name = ? WHERE id = ?");
            $stmt->execute([$fname, $lname, $address, $country, $gender, $username, $password, $imageName, $userId]);

            // Update skills
            $stmt = $connection->prepare("DELETE FROM user_skills WHERE user_id = ?");
            $stmt->execute([$userId]);

            $stmt = $connection->prepare("INSERT INTO user_skills (user_id, skill) VALUES (?, ?)");
            foreach ($selectedSkills as $skill) {
                $stmt->execute([$userId, $skill]);
            }

            header("Location:list.php");
            exit();
        }
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

function validate($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Edit User</title>
</head>
<body>
    <form action="edit.php?id=<?= $userId ?>" method="post" enctype="multipart/form-data">
        <div class="mb-3">
            <label for="fname" class="form-label">First Name</label>
            <input id="fname" type="text" name="fname" placeholder="First Name" class="form-control" value="<?= $user['first_name'] ?>">
            <?php if (isset($_GET['errors']['fname'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['fname'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label for="lname" class="form-label">Last Name</label>
            <input id="lname" type="text" name="lname" placeholder="Last Name" class="form-control" value="<?= $user['last_name'] ?>">
            <?php if (isset($_GET['errors']['lname'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['lname'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" name="address"><?= $user['address'] ?></textarea>
            <?php if (isset($_GET['errors']['address'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['address'] ?></div>
            <?php endif; ?>
        </div>
        <fieldset>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Department</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Open source" name="department" value="Open source" readonly="readonly">
            </div>
        </fieldset>
        <div class="mb-3">
            <label for="country" class="form-label">Country</label>
            <select class="form-select" id="country" name="country">
                <option selected>Select Country</option>
                <option value="Egypt" <?= $user['country'] == 'Egypt' ? 'selected' : '' ?>>Egypt</option>
                <option value="Canada" <?= $user['country'] == 'Canada' ? 'selected' : '' ?>>Canada</option>
                <option value="Korea" <?= $user['country'] == 'Korea' ? 'selected' : '' ?>>Korea</option>
            </select>
            <?php if (isset($_GET['errors']['country'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['country'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label class="form-label">Gender</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="Male" value="Male" <?= $user['gender'] == 'male' ? 'checked' : '' ?>>
                <label class="form-check-label" for="Male">Male</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="Gender" id="Female" value="Female" <?= $user['gender'] == 'female' ? 'checked' : '' ?>>
                <label class="form-check-label" for="Female">Female</label>
            </div>
            <?php if (isset($_GET['errors']['gender'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['gender'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label class="form-label">Skills</label>
            <div class="form-check">
                <input type="checkbox" id="php" name="Skills[]" value="php" <?= in_array('php', $skills) ? 'checked' : '' ?>>
                <label for="php">PHP</label>
            </div>
            <div class="form-check">
                <input type="checkbox" id="mySql" name="Skills[]" value="mySql" <?= in_array('mySql', $skills) ? 'checked' : '' ?>>
                <label for="mySql">MySQL</label>
            </div>
            <?php if (isset($_GET['errors']['skills'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['skills'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="text" name="username" placeholder="Username" class="form-control" value="<?= $user['username'] ?>">
            <?php if (isset($_GET['errors']['username'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['username'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" class="form-control" value="<?= $user['password'] ?>">
            <?php if (isset($_GET['errors']['password'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['password'] ?></div>
            <?php endif; ?>
        </div>
        <div class="mb-3">
            <label for="image" class="form-label">Profile Image</label>
            <input type="file" id="image" name="image" class="form-control">
            <?php if (isset($_GET['errors']['image'])): ?>
                <div class='alert alert-danger m-3' role='alert'><?= $_GET['errors']['image'] ?></div>
            <?php endif; ?>
            <?php if (!empty($user['image_name'])): ?>
                <div class="mt-2">
                    <img src="imgs/<?= $user['image_name'] ?>" alt="Profile Image" width="100">
                </div>
            <?php endif; ?>
        </div>
        <button type="submit" class="btn btn-primary" value="register" name="register">Update</button>
    </form>
</body>
</html>