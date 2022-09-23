const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public_html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));