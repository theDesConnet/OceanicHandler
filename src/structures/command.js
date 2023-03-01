const Oceanic = require('oceanic.js');
const Client = require('./client.js');

/**
 * 
 * @param {Client} client 
 * @param {object} args 
 * @param {Oceanic.CommandInteraction} interaction 
 */
function ExecuteFuctions(client, args, interaction) { }

//Класс команды
class Command {
    /**
     * @typedef {{name: string, description: string, permissions: Oceanic.ApplicationCommandPermission[], slashCommandOptions: Oceanic.ApplicationCommandOptionBase[] execute: ExecuteFuctions}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.permissions = options.permissions;
        this.slashCommandOptions = options.slashCommandOptions; 
        this.execute = options.execute;
    }
}

module.exports = Command;