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
  <form class='m-4' method="post" action='db.php'>
    <div class="mb-3">
      <label for="username" class="form-label">User Name</label>
      <input type="text" class="form-control" id="username" name='username'>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name='password'>
    </div>
    <button type="submit" class="btn btn-primary" name='login'>Submit</button>
    <?php
            if (isset($_GET['error'])) {
                echo "<div class='alert alert-danger m-3' role='alert'>invalid data</div>";
            }
            ?>
  </form>
</body>

</html>