const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

// SSL/TLS sertifikalarınızı ve anahtarlarınızı buraya ekleyin
const options = {
  key: fs.readFileSync('./private.pem'),
  cert: fs.readFileSync('./certificate.crt')
};

// Express uygulamasını HTTPS sunucu ile başlatın
const server = https.createServer(options, app);

// Temel bir GET endpoint'i ekleyin
app.get('/', (req, res) => {
  res.send('Merhaba, bu bir HTTPS sunucudur!');
});

// HTTPS sunucusunu belirli bir port üzerinden dinlemeye başlayın
const port = 8000;
server.listen(port, () => {
  console.log(`HTTPS sunucu ${port} portunda çalışıyor`);
});
