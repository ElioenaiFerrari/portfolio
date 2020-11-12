import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
  return res.render('index.html');
});

Router.post('/services/send-message', (req, res) => {
  return res.json({ hello: 'world' });
});

export default Router;
