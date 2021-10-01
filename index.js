const { Client, Intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Watching Holberton School server with ${client.users.cache.size} members.`);
  client.user.setPresence({
      activity: {
          name: `The intranet | Watching Holberton School server with ${client.users.cache.size} members.`,
          type: "PLAYING"
      },
      status: "idle"
  }); 
});


client.login(config.token);