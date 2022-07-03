/* eslint-disable import/extensions */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api.js');

const server = express();
const PORT = 1955;
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());
server.use('/api', apiRoutes);
server.get('/', (req, res) => {res.send('Server works!')});
server.listen(PORT, () => { console.log(`Server is listening on port http://localhost:${PORT}`); });
