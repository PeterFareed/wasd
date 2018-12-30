const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523156066478063626")
setInterval(function() {
channel.send(`حامو);
}, 30)
})

client.login(process.env.BOT_TOKEN);
