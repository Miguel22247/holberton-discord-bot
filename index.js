const Discord = require("discord.js");
const client = new Discord.Client();
const avatarEmbed = require('discord.js-avatar');
require("dotenv").config();
const prefix = process.env.PREFIX;
const keepAlive = require('./server');
const Monitor = require('ping-monitor');


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
///////////////////INICIO////////////////////////////////////////////////////////
client.on("ready", () => {
	console.log(`Bot iniciado correctamente`)
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
	});
	client.login(process.env.TOKEN);
