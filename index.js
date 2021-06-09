const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const prefix = process.env.PREFIX
const token = process.env.TOKEN
const keepAlive = require('./server')
const Monitor = require('ping-monitor')
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

////////////////24/7/////////////////////////////
keepAlive();
const monitor = new Monitor({
  website: 'https://GenerousUnsungProfiles.thephodit.repl.run',
  title: 'Secundario',
  interval: 30 // minutes

});

monitor.on('up', (res) => console.log(`${res.website} está encendido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));

client.on('ready', () => {
	console.log(`${client.user.username} ✅`)
	const array = [
		{
			  name: `the intranet`,
			  type: `WATCHING`
		},
		{
			name: `to write code`,
			type: `PLAYING`
		}
	]
	  setInterval(() => {
		function presence() {
		  client.user.setPresence({
			status: 'online',
			activity: array[Math.floor(Math.random() * array.length)],
		  });
		}
	
	
		presence();
	  }, 1000);
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.login(token)