const express = require('express');
const db = require('./database/index.js');

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/pokemon', (req, res) => {
  res.send('Add Pokemon Later!')
})

app.get('/pokemon', (req, res) => {
  db.getPokedex()
    .catch(err => console.log(err))
    .then((result) => {
      console.log(result);
      res.send(result);
    })
});

app.delete('/pokemon/:name', (req, res) => {
  let name = req.params;
  db.remove(name.name)
    .catch(err => res.status(500).send(err))
    .then(() => res.status(200).send('DELETED'))
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
})
