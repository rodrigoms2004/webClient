require('dotenv/config');
const axios = require('axios');
const http = require('http');
// const https = require('https');

const httpAgent = new http.Agent({ keepAlive: true });
// const httpsAgent = new https.Agent({ keepAlive: true });

const api = axios.create({
  baseURL: process.env.baseUrl,
  timeout: process.env.timeout,
  httpAgent,
  // httpsAgent
});

module.exports = {
  api, 
  httpAgent 
}
