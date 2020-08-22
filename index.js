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

exports.presence.playing = function(string) {
    client.on("ready", () => {
       client.user.setActivity(string.replace(/\s/g, ""), {type: "playing"})
    })
}
exports.presence.listening = function(string) {
    client.on("ready", () => {
       client.user.setActivity(string.replace(/\s/g, ""), {type: "listening"})
    })
}
exports.presence.watching = function(string) {
    client.on("ready", () => {
       client.user.setActivity(string.replace(/\s/g, ""), {type: "watching"})
    })
}
exports.status = function(string) {
    client.on("ready", () => {
 client.user.setStatus(string.replace(/\s/g, ""))
    })
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

  const command = args.shift().toLowerCasge();

if(command === "ajuda") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Bem vindo ao centro de comandos!")
    .setColor(Math.random(1* 1000))
    .setDescription(`
    ${string.replace(/\s/g, "")}ping
    `)
    .setFooter("Está package tem apenas 1 comando!")
   message.reply(embed)
};
})

}
exports.say = function() {
    client.on("message", message => {
        if(message.author.bot) return;
        if (message.content.indexOf(string.replace(/\s/g, "")) !== 0) return;


  const args = message.content
    .slice(string.replace(/\s/g, "").length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

if(command === "say") {
   if (message.member.hasPermission("MANAGE_GUILD")) {
    message.delete();
    let botmessage = args.slice(0).join(" ");
    let channel = args.slice(1).join(" ");

    if (args[0] == null) {
      return message.channel.send(
        `${message.author},**Diga algo !** :grr:`
      );
    }
    if (!message.mentions.channels.first()) {
      message.channel.send(botmessage);
    } else {
      message.mentions.channels.first().send(channel);
    }
  } else {
    message.reply(
      "Você não tem permissão para usar, pois não tem a permissão: **`Gerenciar Servidor`**"
    );
};
})

}
