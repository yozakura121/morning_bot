require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    //準備完了したときの処理をここに書く
    console.log('準備完了');
});

client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (message.content === "おはよう") {
        let channel = message.channel;
        let author = message.author.channel;
        let reply_text = "おはよう";
        message.reply(reply_text)
            .then(message => console.log(`ok:${reply_text}`))
            .catch(console.error);
        return;
    }

});

client.login(token);