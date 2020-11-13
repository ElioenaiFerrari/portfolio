import express from 'express';
import Mail from './providers/mail';

const Router = express.Router();

Router.get('/', (req, res) => {
  return res.render('index.html');
});

Router.post('/services/send-message', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log(req.body);

    const params = {
      from: email,
      to: process.env.OWNER_EMAIL,
      subject: subject,
      text: message,
    };

    const response = await Mail.sendMail(params);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default Router;
