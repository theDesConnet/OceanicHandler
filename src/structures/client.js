const Oceanic = require('oceanic.js');
const Command = require('./command');
const Event = require('./event');
const fs = require('fs');
const Component = require('./component');

class Client extends Oceanic.Client {
    /**
     * @param {Oceanic.ClientOptions} options 
     */
    constructor(options) {
        super(options)

        /**
         * @type {Oceanic.Collection<string, Command>}
         */
        this.commands = new Oceanic.Collection();
        /**
         * @type {Oceanic.Collection<string, Component>}
         */
        this.components = new Oceanic.Collection();

        //Обработчик команд
        const commandFiles = fs.readdirSync('./commands/')
            .filter(file => file.endsWith('.js'))
            .filter(file => !file.startsWith("_"));
        /**
         * @type {Command[]}
         */

        const commands = commandFiles.map(file => require(`../commands/${file}`));

        commands.forEach(cmd => {
            console.log(`[INFO] Команда: ${cmd.name} была добавлена в список команд!`);
            this.commands.set(cmd.name, cmd);
        })

        const slashCommands = commands
            .map(cmd => ({
                name: cmd.name,
                description: cmd.description,
                permissions: [],
                options: cmd.slashCommandOptions,
                defaultPermission: true
            }))

        this.removeAllListeners();
        this.on("ready", async () => {
            const command = await this.application.bulkEditGlobalCommands(slashCommands);

            command.forEach((cmd) => {
                console.log(`[INFO] Slash команда "${cmd.name} была загружена"`);
            })
        })

        //Обработчик ивентов
        fs.readdirSync('./events/')
            .filter(file => file.endsWith('.js'))
            .filter(file => !file.startsWith("_"))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`)
                console.log(`[INFO] Ивент: ${event.event} был загружен`)
                this.on(event.event, event.run.bind(null, this))
            })

        //Обработчик компонентов
        fs.readdirSync('./components/').forEach(component => {
            const components = fs.readdirSync(`./components/${component}/`)
                .filter(file => file.endsWith('.js'))
                .filter(file => !file.startsWith("_"))
                .forEach((cmp) => {
                    /**
                     * @type {Component}
                     */
                    const comp = require(`../components/${component}/${cmp}`)
                    this.components.set(comp.componentID, comp);
                    switch (comp.componentType) {
                        case Oceanic.ComponentTypes.BUTTON:
                            return console.log(`[INFO] Компонент (Кнопка) с ID "${comp.componentID}" была успешно загружена`);

                        case Oceanic.ComponentTypes.CHANNEL_SELECT || Oceanic.ComponentTypes.MENTIONABLE_SELECT || Oceanic.ComponentTypes.ROLE_SELECT || Oceanic.ComponentTypes.STRING_SELECT || Oceanic.ComponentTypes.USER_SELECT:
                            return console.log(`[INFO] Компонент (selectMenu) с ID "${comp.componentID}" была успешно загружена`);

                        case Oceanic.ComponentTypes.TEXT_INPUT:
                            return console.log(`[INFO] Компонент (Modal) с ID "${comp.componentID}" была успешно загружена`);
                    }
                })


        })

        this.connect();
    }
}

module.exports = Client;