require('dotenv').config()
const path = require('path');

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.use('/static', express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

