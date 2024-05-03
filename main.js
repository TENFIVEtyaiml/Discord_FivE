const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ],
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login('OTM1NDc1Nzc3OTIxNzY5NTEy.GdVW6f.VaMeF-Dz8NZphsOsJ5oXP3HHWIJ7XUwVeSt5NI');
