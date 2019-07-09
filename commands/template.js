module.exports = class template {
    constructor() {
        this.name = 'test',
        this.alias = '',
        this.usage = ''
    }

    async run(bot, message, args) {
        await message.delete();
        message.reply(this.name + " worked! You can use " + this.alias + " to use the command as well!");
        message.reply("Original usage: " + this.usage);
    }
}