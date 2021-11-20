const express = require('express');
const app = express();
const routes = require('./routes/v1/index');
const port=process.env.PORT||3000
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use('/v1', routes);
 
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })