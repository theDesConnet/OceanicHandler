const Component = require('../../structures/component');
const { MessageFlags, ComponentTypes, TextInputStyles } = require('oceanic.js');
const builder = require('@oceanicjs/builders');

module.exports = new Component({
    componentID: "testButton",
    componentType: ComponentTypes.BUTTON,
    async execute(client, interaction) {
        const Modal = new builder.TextInput(TextInputStyles.PARAGRAPH, "Test", "testParagraph");
        interaction.createModal({
            title: "Demo modal!",
            customID: "testModal",
            components: [{type: ComponentTypes.ACTION_ROW, components: [Modal]}]
        });
    }
}); 