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
  console.log(`🤖 Bot online as ${client.user?.tag}`);

  const channelId = process.env.CHANNEL_ID;
  const message = process.env.MESSAGE;
  const channel = await client.channels.fetch(channelId!);

  if (!message) {
    console.error('❌ MESSAGE variable is not defined in .env file');
    process.exit(1);
  }

  if (channel && channel.isTextBased()) {
    await (channel as TextChannel).send(message);
    console.log('✅ Message sent!');
  } else {
    console.log('❌ Channel not found or not a text channel.');
  }

  client.destroy();
});

client.login(process.env.TOKEN);