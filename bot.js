require("dotenv").config();

console.log('tickle');
const { Client, Events, GatewayIntentBits } = require('discord.js'); 

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages,],partials: ['MESSAGE', 'CHANNEL']});

client.login(process.env.BOT_TOKEN);

client.once(Events.ClientReady, onReady);

function onReady() {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    };

client.on(Events.MessageCreate, onMessage);

function onMessage(message){
    if(message.author.bot) {
      return;
    }

    command = message.content.substring(message.content.indexOf("!"));
  console.log(command)
    if(command.startsWith('!ask')){
      const answers = ["tickle","fondle","stomp","squish","lick"]

      let answer = answers[Math.floor(Math.random() * answers.length)]

    message.reply(answer)
    }
   }   