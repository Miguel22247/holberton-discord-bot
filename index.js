const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
      let ping = Math.floor(message.client.ws.ping);
      message.channel.send(":ping_pong: Pong!, tu ping es de "+ ping +"ms");
  }
});

client.login(config.token);