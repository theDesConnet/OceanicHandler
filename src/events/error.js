const { ActivityTypes, ActivityFlags } = require('oceanic.js');
const Event = require('../structures/event');

module.exports = new Event('error', async (client, error) => {
    console.log(`[ERROR] ${error}`);
})