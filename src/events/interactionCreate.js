const { InteractionTypes } = require('oceanic.js');
const Event = require('../structures/event');

module.exports = new Event('interactionCreate', async (client, interaction) => {
    switch (interaction.type) {
        case InteractionTypes.APPLICATION_COMMAND:
            const command = client.commands.get(interaction.data.name);
            const args = interaction.data.options;
            if (!command) return;

            command.execute(client, args, interaction);
            break;

        case InteractionTypes.MESSAGE_COMPONENT:
            const component = client.components.get(interaction.data.customID);
            if (!component) return;

            component.execute(client, interaction);
            break;

        case InteractionTypes.MODAL_SUBMIT:
            const modal = client.components.get(interaction.data.customID);
            if (!modal) return;

            modal.execute(client, interaction);
            break;
    }
})