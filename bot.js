console.log('bruv');
const token = 'BOT_TOKEN'

console.log('tickle');
const { Client, Events, GatewayIntentBits } = require('discord.js'); const client = new Client({
intents: [
GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages,
],
    partials: ['MESSAGE', 'CHANNEL']
});
client.login(token);

client.once(Events.ClientReady, onReady);

function onReady() {
console.log(`Ready! Logged in as ${c.user.tag}`);
};

client.on(Events.MessageCreate, onMessage);

function onMessage(msg){
    if (msg.content.includes('hej')){
        msg.reply('sup');
    }
    console.log(msg);
}