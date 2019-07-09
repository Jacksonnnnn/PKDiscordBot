/*
    https://discordapp.com/oauth2/authorize?client_id=597974440814444555&scope=bot
 */

const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./botconfig.json');
const { CommandHandler } = require('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: [config.prefix],
});
const DiscordRSS = require('discord.rss');
const drss = new DiscordRSS.Client({bot:{prefix:config.prefix}});


const embedColor = "#8b41c4";

bot.on("ready", () => {
    console.log(bot.user.username + " is online!");
    bot.user.setActivity("http://projectkorra.com");
});

bot.on("message", (message) => {
    if (message.channel.type === 'dm') return;
    if (message.author.type === 'bot') return;

    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);

    if (!cmd) return;

    try {
        cmd.run(bot, message, args);
    } catch (e) {
        console.log(e);
    }
});

bot.login(config.token);
drss.login(config.token);