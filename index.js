const Discord = require("discord.js");
const Bot = new Discord.Client();

bot.on('message', (message) = > {
    if(message.content == 'Ping') {
     //message.sendMessage('Pong!')
     message.channel.sendMessage('Pong!');
     }

});

bot.login('NTAzMzgxMDM5ODcyMjEyOTky.DsOZ0A.2kevF5rDTXPVMAfSyYxNcs1_Bz4');
