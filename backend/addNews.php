<?php

include("connection.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $content = $_POST['content'];

    $new = $mysqli->prepare("INSERT INTO news (title, content) VALUES (?, ?)");
    $new->bind_param("ss", $title, $content);

   
    if ($new->execute()) {
        echo "News added successfully";
    } else {
        echo "Error adding news: " . $new->error;
    }

    $new->close();
   
}


?>
