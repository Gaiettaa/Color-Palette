<?php
// Connessione al database
$servername = "localhost";
$username = "root"; // o il tuo utente MySQL
$password = ""; // la tua password MySQL
$dbname = "palette";

// Creare connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla connessione
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ricevere i dati dal form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Inserire i dati nella tabella
$sql = "INSERT INTO contacts (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

// Esegui la query e controlla il risultato
if ($conn->query($sql) === TRUE) {
    // Se il record è creato con successo, reindirizza alla pagina home
    header("Location: index.php"); // Modifica "home.php" con il nome della tua pagina home
    exit(); // Assicurati di fermare l'esecuzione del codice
} else {
    $msg = "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
