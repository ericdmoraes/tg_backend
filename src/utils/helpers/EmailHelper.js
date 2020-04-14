import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

const transporter = nodemailer.createTransport(mailConfig);

export const t = () => {
  return 0;
};

export const sendEmail = (token, email, password) => {
  const url = 'www.google.com';

  return transporter.sendMail({
    to: email,
    html: `Obrigado por registrar-se no nosso site.
      Por favor clique na URL abaixo para confirmar seu endereço
      de e-mail e ativar sua conta.
      <br><p>Sua senha temporaria é: <b>${password}</b></p><br>
      <br><a href="${url}">CLIQUE AQUI</a><br>`,
  });
};
