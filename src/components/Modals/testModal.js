const Component = require('../../structures/component');
const { MessageFlags, ComponentTypes } = require('oceanic.js');

module.exports = new Component({
    componentID: "testModal",
    componentType: ComponentTypes.TEXT_INPUT,
    async execute(client, interaction) {
        interaction.createMessage({content: `Value is: ${interaction.data.components[0].components[0].value}`, flags: MessageFlags.EPHEMERAL});
    }
}); 