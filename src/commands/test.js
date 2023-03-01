const Command = require('../structures/command');
const builder = require('@oceanicjs/builders');
const { ComponentTypes } = require('oceanic.js');

module.exports = new Command({
    name: "test",
    description: "Test Command",
    permissions: [],
    slashCommandOptions: [],
    async execute(client, args, interaction) {
        const btn = new builder.Button()
            .setCustomID("testButton")
            .setLabel("Test Button")
            .setStyle(1);

        let selectMenu = new builder.SelectMenu(ComponentTypes.STRING_SELECT, "testSelectMenu");
        selectMenu.options = [{
            label: "testVal1",
            value: "Value 1"
        }, {
            label: "testVal2",
            value: "Value 2"
        }];

        interaction.createMessage({ content: "test!", components: [new builder.ActionRow().addComponent(btn), new builder.ActionRow().addComponent(selectMenu)] });
    }
})