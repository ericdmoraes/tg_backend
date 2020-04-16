import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

const transporter = nodemailer.createTransport(mailConfig);

export const t = () => {
  return 0;
};

export const sendEmail = (token, email, password) => {
  return transporter.sendMail({
    to: email,
    html: `Obrigado por registrar-se no nosso site.
      Por favor, use esta senha para efetuar login no site.
      <br><p>Sua senha é: <b>${password}</b></p><br>
      <br><a href="${process.env.BASE_URL}">CLIQUE AQUI PARA VOLTAR PARA O SITE</a><br>`,
  });
};
