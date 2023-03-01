const Client = require('./structures/client');
const config = require('./jsons/config.json');

new Client({auth: `Bot ${config.token}`});
