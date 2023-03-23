const token = 'MTA4ODAxMzI3OTI1NjkxNjA0OA.GpH65Y.TJBTn30j4jzEdCuvtIxG48739BZYbG2L8qbjFY'

console.log('tickle');
const { Client, Events, GatewayIntentBits } = require('discord.js'); 
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages,],partials: ['MESSAGE', 'CHANNEL']});

client.login(token);

client.once(Events.ClientReady, onReady);

function onReady() {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    };

client.on(Events.MessageCreate, onMessage);

function onMessage(msg){
    if (msg.content.includes('hej')){
        msg.reply('sup');
    }
    console.log(msg);
}