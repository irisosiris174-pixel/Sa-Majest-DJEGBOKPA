import { Resend } from 'resend';

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY || '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { nom, email, telephone, sujet, message } = req.body;

    if (!nom || !email || !message) {
      return res.status(400).json({ success: false, message: 'Veuillez remplir tous les champs obligatoires.' });
    }

    const emailHtml = `
      <h2>Nouvelle demande de consultation depuis le site web</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone || 'Non renseigné'}</p>
      <p><strong>Sujet :</strong> ${sujet || 'Non renseigné'}</p>
      <br />
      <h3>Message :</h3>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Contact Site Web <onboarding@resend.dev>',
      to: ['djegbokpa@gmail.com'],
      subject: `Nouveau Message de ${nom} - ${sujet || 'Demande de contact'}`,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error('Erreur API Resend:', error);
      return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message via Resend.', error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erreur du serveur:', error);
    return res.status(500).json({ success: false, message: 'Erreur interne du serveur.' });
  }
}
