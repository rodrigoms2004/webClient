require('dotenv/config');
const { api, httpAgent } = require('./services/api');

const conn = async () => {
  try {
    const response = await api.get(process.env.queryPath, {
      params: {
        PRI: process.env.PRI
      },
      httpAgent,
    })

    console.log(response.statusText)
    return true   // for setInterval gets something
  } catch (error) {
    console.log(error.message)
    return false  // for setInterval gets something
  }
};

setInterval(() => conn(), process.env.timeInterval);
