const Component = require('../../structures/component');
const { MessageFlags, ComponentTypes } = require('oceanic.js');

module.exports = new Component({
    componentID: "testSelectMenu",
    componentType: ComponentTypes.STRING_SELECT,
    async execute(client, interaction) {
        interaction.createMessage({content: `Value is: ${interaction.data.values.raw[0]}`, flags: MessageFlags.EPHEMERAL});
    }
}); 