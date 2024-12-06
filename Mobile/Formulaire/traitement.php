<?php
// Informations de connexion à la base de données
$host = 'localhost';
$dbname = 'projet solution web';
$username = 'root'; // Remplacez par votre utilisateur MariaDB
$password = ''; // Remplacez par votre mot de passe MariaDB

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérification des données reçues
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $nom = htmlspecialchars($_POST['nom']);
        $prenom = htmlspecialchars($_POST['prenom']);
        $motif = htmlspecialchars($_POST['motif']);
        $message = htmlspecialchars($_POST['message']);

        // Insertion dans la base de données
        $sql = "INSERT INTO reponses (email, nom, prenom, motif, message) VALUES (:email, :nom, :prenom, :motif, :message)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':email' => $email,
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':motif' => $motif,
            ':message' => $message,
        ]);

        // Redirection ou message de confirmation
        echo "Votre message a bien été envoyé. Merci !";
    }
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
