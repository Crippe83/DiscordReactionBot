// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Create an instance of a config
const config = require("./config.json");

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Reaction Bot Online And Monitoring Channels.');
});

client.on('message', message => {
    if (message.author.id !== config.user) return;
    message.react(config.emoji);
	message.channel.send(config.role);
    console.log('Added Reaction And Mention To Discord Message.');
});

client.login(config.token);
