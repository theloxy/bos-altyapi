const Discord = require('discord.js');
const bot = new Discord.Client();


const ayarlar = require('./ayarlar.json')
const { CommandHandler } = require("djs-commands")
const loxy = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ayarlar.prefix
  });


  bot.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = loxy.getCommand(command);
    if(!cmd) return
    try{
        cmd.run(bot,message,args)
    }catch(e){
        console.log(e)
    }

});

  bot.login(ayarlar.token);
