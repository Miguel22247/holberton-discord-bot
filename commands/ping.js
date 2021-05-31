if (command == ping){
	let ping = Math.floor(message.client.ws.ping);
		message.channel.send(":ping_pong: Pong!, "+ ping + "ms");
}
