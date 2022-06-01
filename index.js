require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { mongoClient } = require('./mongo');
const app = express();
/*app.get('/', async (req, res) => {
  const db = await mongoClient();
  if (!db) res.status(500).send('Systems Unavailable');

  const { data } = await axios.get(
    'https://goweather.herokuapp.com/weather/california'
  );
  await db.collection('weather').insertOne(data);

  return res.send(data);
});*/
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'youssef.samanody@yahoo.com',
  from: 'youssef.elsamanoudi@student.giu-uni.de',
  subject: 'order confirmation',
  text: 'Thank you for using rabbit',
  html: '<strong>Thank you for using rabbit,any question please contact us</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
//app.listen(3000);
