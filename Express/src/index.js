const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', (req, res) => {

  const data = {

    response: 'OK'

  };

  return res.status(200).json(data);

});

app.get('/contacts', (req, res) => {

  const data = {

    response: [

      {
        name: 'Nemanja Zunic',
        phone: 519,
        age: 21,
        email: 'nemanja.zunic@gmail.com',
      },

      {
        name: 'Lazar Eric',
        phone: 425,
        age: 28,
        email: 'lazar.eric@gmail.com',
      },

    ],
  };

  return res.status(200).json(data);

});

app.listen(PORT, () => {

  console.log(`Yay my server running on a http://localhost:${PORT}`);

})

