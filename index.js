const dotenv = require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  // set headers
  res.header({
    'Content-Type': 'application/json',
    'Custom-Header-One': 'VALUE_ONE',
    'Secure-Response-Header': 'ds983ho09jc3823h-dsj9293doh'
  });
  // set cookie
  const cookieString = JSON.stringify({
    username: "Max",
    email: "max@mail.de",
    colorTheme: "dark"
  });
  res.cookie('userData', cookieString);
  // send status and response
  res.status(200).json({
    msg: "What a beautiful response"
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Express server listening in port ${ PORT }`));
