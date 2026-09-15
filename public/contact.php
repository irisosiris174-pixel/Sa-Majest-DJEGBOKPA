<?php
/**
 * Script PHP de traitement du formulaire de contact pour Sa Majesté DJEGBOKPA
 * Déploiement : Hébergement Hostinger
 * Sécurisé, sans stockage de données en base de données.
 */

// Headers de sécurité
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Autoriser uniquement les requêtes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array("success" => false, "message" => "Méthode non autorisée."));
    exit;
}

// Récupérer le contenu JSON de la requête
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    http_response_code(400);
    echo json_encode(array("success" => false, "message" => "Données invalides ou vides."));
    exit;
}

// Nettoyage et sécurisation des données d'entrée
$nom = isset($input['nom']) ? strip_tags(trim($input['nom'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$telephone = isset($input['telephone']) ? strip_tags(trim($input['telephone'])) : '';
$sujet = isset($input['sujet']) ? strip_tags(trim($input['sujet'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

// Validation des champs requis
if (empty($nom) || empty($email) || empty($telephone) || empty($sujet) || empty($message)) {
    http_response_code(400);
    echo json_encode(array("success" => false, "message" => "Veuillez remplir tous les champs obligatoires."));
    exit;
}

// Validation du format de l'e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(array("success" => false, "message" => "Format d'adresse e-mail invalide."));
    exit;
}

// Limiter la longueur des caractères pour éviter le spam
if (strlen($nom) > 100 || strlen($email) > 100 || strlen($telephone) > 30 || strlen($sujet) > 150 || strlen($message) > 3000) {
    http_response_code(400);
    echo json_encode(array("success" => false, "message" => "Longueur maximale de caractères dépassée."));
    exit;
}

// Destinataire officiel
$destinataire = "djegbokpa@gmail.com";

// Sujet du mail reçu
$sujet_mail = "[Formulaire Sa Majesté-Djegbokpa] " . $sujet;

// Corps du mail au format HTML
$corps_mail = "
<html>
<head>
  <title>Nouveau message de contact - Sa Majesté DJEGBOKPA</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 20px; color: #333333; }
    .container { background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-top: 4px solid #D4AF37; }
    h2 { color: #580F1E; margin-top: 0; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    td { padding: 10px; border-bottom: 1px solid #eeeeee; }
    .label { font-weight: bold; color: #555555; width: 180px; }
    .message-content { background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #dddddd; margin-top: 15px; white-space: pre-wrap; line-height: 1.5; }
    .footer { margin-top: 25px; font-size: 11px; color: #999999; text-align: center; border-top: 1px solid #eeeeee; padding-top: 10px; }
  </style>
</head>
<body>
  <div class='container'>
    <h2>Nouveau message de contact</h2>
    <table>
      <tr>
        <td class='label'>Nom du consultant :</td>
        <td>" . htmlspecialchars($nom) . "</td>
      </tr>
      <tr>
        <td class='label'>Téléphone / WhatsApp :</td>
        <td>" . htmlspecialchars($telephone) . "</td>
      </tr>
      <tr>
        <td class='label'>Adresse E-mail :</td>
        <td>" . htmlspecialchars($email) . "</td>
      </tr>
      <tr>
        <td class='label'>Sujet :</td>
        <td>" . htmlspecialchars($sujet) . "</td>
      </tr>
    </table>
    <div class='message-content'>
<strong>Message du consultant :</strong><br><br>
" . nl2br(htmlspecialchars($message)) . "
    </div>
    <div class='footer'>
      Ce message a été envoyé depuis le formulaire de contact du site officiel dah-djegbokpa.org.
    </div>
  </div>
</body>
</html>
";

// Configuration des en-têtes d'envoi (Best practices pour la délivrabilité)
// Pour éviter d'être bloqué comme spam, le 'From' doit être lié au domaine d'hébergement.
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Formulaire Sa Majesté DJEGBOKPA <noreply@dah-djegbokpa.org>" . "\r\n";
$headers .= "Reply-To: " . $nom . " <" . $email . ">" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Envoi de l'e-mail via PHP mail()
if (mail($destinataire, $sujet_mail, $corps_mail, $headers)) {
    echo json_encode(array("success" => true, "message" => "Votre message a été envoyé avec succès."));
} else {
    http_response_code(500);
    echo json_encode(array("success" => false, "message" => "Impossible d'envoyer l'e-mail. Veuillez contacter l'administrateur du serveur."));
}
?>
