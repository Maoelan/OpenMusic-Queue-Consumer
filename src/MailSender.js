const nodemailer = require('nodemailer');
const config = require('../utils/config');

class MailerSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: config.mailer.host,
      port: config.mailer.port,
      auth: {
        user: config.mailer.user,
        pass: config.mailer.pass,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'OpenMusic App',
      to: targetEmail,
      subject: 'Ekspor Lagu Playlist',
      text: 'Terlampir hasil dari ekspor lagu playlist',
      attachments: [
        {
          filename: 'playlistsongs.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailerSender;
