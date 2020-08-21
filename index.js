const Discord = require('discord.js');
const client = new Discord.Client();
/*
client.on("message", message => {
        if(message.author.bot) return;
        if (message.content.indexOf(string.replace(/\s/g, "")) !== 0) return;


  const args = message.content
    .slice(string.replace(/\s/g, "").length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

if(command === "") {
   
};
})
*/
exports.login = function(string) {
    client.on("ready", () => {
        console.log("Online!")
    })
    client.login(string.replace(/\s/g, ""))
}

exports.ping = function(string) {
    client.on("message", message => {
        if(message.author.bot) return;
        if (message.content.indexOf(string.replace(/\s/g, "")) !== 0) return;


  const args = message.content
    .slice(string.replace(/\s/g, "").length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

if(command === "ping") {
    message.channel.send("pong!");
};
})
    
}
exports.ajuda = function(string) {
    client.on("message", message => {
        if(message.author.bot) return;
        if (message.content.indexOf(string.replace(/\s/g, "")) !== 0) return;


  const args = message.content
    .slice(string.replace(/\s/g, "").length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

if(command === "ajuda") {
   message.reply("test")
};
})
}

