require('dotenv').config();

export default {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  default: {
    from: 'Equipe App <noreply@goberber.com>',
    subject: 'APP | Confirme seu email de cadastro no sistema',
  },
};
