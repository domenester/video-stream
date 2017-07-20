/**
 * References: 
 * http://francisshanahan.com/index.php/2011/stream-a-webcam-using-javascript-nodejs-android-opera-mobile-web-sockets-and-html5/
 */

let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname + '/../../public')));

app.get('/transmissor', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../public/html/', 'transmissor.html')); 
});

app.get('/receptor', (req, res) => {
  res.sendFile('./public/html/receptor.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
