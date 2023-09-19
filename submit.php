//  By Rakshitha Ireddi 
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $age = $_POST["age"];
  $feedback = $_POST["feedback"];
  
  // Store the data in a database or send it via email
  // Here, we'll just display the submitted data
  echo "Name: $name<br>";
  echo "Age: $age<br>";
  echo "Feedback: $feedback<br>";
}
?>
