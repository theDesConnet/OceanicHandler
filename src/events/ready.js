const { ActivityTypes, ActivityFlags } = require('oceanic.js');
const Event = require('../structures/event');

module.exports = new Event('ready', async (client) => {
    console.log('[INFO] Bot was loaded!');
    client.editStatus("online", [{type: ActivityTypes.LISTENING, name: "OceanicHandler"}]);
})