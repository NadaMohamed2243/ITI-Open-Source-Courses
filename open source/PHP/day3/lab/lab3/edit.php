<?php
try {
    $userId = $_GET['id'];
    $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");

    $stmt = $connection->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);


    $stmt = $connection->prepare("SELECT skill FROM user_skills WHERE user_id = ?");
    $stmt->execute([$userId]);
    $skills = $stmt->fetchAll(PDO::FETCH_COLUMN);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $address = $_POST['address'];
        $country = $_POST['country'];
        $gender = $_POST['Gender'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $selectedSkills = $_POST['Skills'] ?? [];

        $stmt = $connection->prepare("UPDATE users SET first_name = ?, last_name = ?, address = ?, country = ?, gender = ?, username = ? WHERE id = ?");
        $stmt->execute([$fname, $lname, $address, $country, $gender, $username, $userId]);


        $stmt = $connection->prepare("DELETE FROM user_skills WHERE user_id = ?");
        $stmt->execute([$userId]);

        $stmt = $connection->prepare("INSERT INTO user_skills (user_id, skill) VALUES (?, ?)");
        foreach ($selectedSkills as $skill) {
            $stmt->execute([$userId, $skill]);
        }

        header("Location:list.php");
        exit();
    }
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
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
    <form action="edit.php?id=<?= $userId ?>" method="post">
        <div class="mb-3">
            <label for="fname" class="form-label">First Name</label>
            <input id="fname" type="text" name="fname" placeholder="First Name" class="form-control" value="<?= $user['first_name'] ?>">
        </div>
        <div class="mb-3">
            <label for="lname" class="form-label">Last Name</label>
            <input id="lname" type="text" name="lname" placeholder="Last Name" class="form-control" value="<?= $user['last_name'] ?>">
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" name="address"><?= $user['address'] ?></textarea>
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
        </div>

        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="text" name="username" placeholder="Username" class="form-control" value="<?= $user['username'] ?>">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" class="form-control">
        </div>

        <button type="submit" class="btn btn-primary" value="register" name="register">Submit</button>
    </form>
</body>
</html>
