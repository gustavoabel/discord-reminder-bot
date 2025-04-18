import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', async () => {
  console.log(`🤖 Bot online como ${client.user?.tag}`);

  const channelId = process.env.CHANNEL_ID;
  const message = process.env.MESSAGE || '🚨 Não se esqueçam de realizar os apontamentos!!!';
  const channel = await client.channels.fetch(channelId!);

  if (channel && channel.isTextBased()) {
    await (channel as TextChannel).send(message);
    console.log('✅ Mensagem enviada!');
  } else {
    console.log('❌ Canal não encontrado ou não é de texto.');
  }

  client.destroy();
});

client.login(process.env.TOKEN);