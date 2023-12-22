// pages/api/enviar-email.ts
import dotenv from 'dotenv';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Cors from 'cors'


const cors = Cors({
  methods: ['POST'],
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido
  }

  const { nome, email, telefone, assunto, mensagem } = req.body;

  // Configurar o transporte Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Por exemplo, 'gmail'
    auth: {
      user: process.env.EMAIL,
      pass: process.env.SENHA,
    },
  });

  // Configurar o e-mail
  const mailOptions = {
    from: email,
    to: 'junior.alex2890@gmail.com', // O e-mail do destinatário
    subject: assunto,
    text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
  };
  console.log('Mail options configurado com sucesso!');


  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar e-mail.' });
  }
}
