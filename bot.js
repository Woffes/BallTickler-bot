const token = 'MTA4ODAxMzI3OTI1NjkxNjA0OA.GZh5Vk.8_oBD2A4X1wNFv0OwQaOlXnEphaKWyTk59x6ls'

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