<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de contact</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
        }
        .form-container {
            background: #fff;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            width: 100%;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        input, textarea, select, button {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        button {
            background: #ff6f61;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background: #e65550;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Contactez-nous</h1>
        <form action="traitement.php" method="POST">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required>
            
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
            
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required>
            
            <label for="motif">Motif</label>
            <select id="motif" name="motif" required>
                <option value="question">Question</option>
                <option value="support">Support</option>
                <option value="autre">Autre</option>
            </select>
            
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
            
            <button type="submit">Envoyer</button>
        </form>
    </div>
</body>
</html>
