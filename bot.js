require("dotenv").config();

const token = 'MTA4ODAxMzI3OTI1NjkxNjA0OA.GZh5Vk.8_oBD2A4X1wNFv0OwQaOlXnEphaKWyTk59x6ls'

console.log('tickle');
const { Client, Events, GatewayIntentBits } = require('discord.js'); 
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages,],partials: ['MESSAGE', 'CHANNEL']});

client.login(token);

client.once(Events.ClientReady, onReady);

function onReady() {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    };

client.login(process.env.tokenName);

client.on(Events.MessageCreate, onMessage);

function onMessage(msg){
    if(message.author.bot) {
      return;
    }

    if(msg.content.includes('!ask')){
      const answers = ["tickle","fondle","stomp","squish","lick"]
      let answer = answers[Math.floor(Math.random() * answers.length)]
      msg.reply(answer)
      console.log(answer + " : " + Math.floor(Math.random() * answers.length))
    }
   }   