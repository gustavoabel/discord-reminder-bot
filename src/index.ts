import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import 'dotenv/config';
import cron from 'node-cron';
import moment from 'moment-timezone';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`🤖 Bot online como ${client.user?.tag}`);

  const timezone = process.env.TIMEZONE || 'America/Sao_Paulo';
  const scheduleHour = process.env.SCHEDULE_HOUR || '17';
  const channelId = process.env.CHANNEL_ID;

  console.log('⏰ Hora atual SP:', moment().tz(timezone).format('HH:mm:ss'));

  cron.schedule(
    `0 ${scheduleHour} * * *`,
    async () => {
      try {
        const channel = await client.channels.fetch(channelId!);

        if (channel && channel.isTextBased()) {
          (channel as TextChannel).send('🚨 Não se esqueçam de realizar os apontamentos!!!');
          console.log('✅ Mensagem enviada às', scheduleHour, 'h (BRT)');
        } else {
          console.log('❌ Canal não encontrado ou não é de texto.');
        }
      } catch (err) {
        console.error('❌ Erro ao buscar canal:', err);
      }
    },
    {
      timezone,
    }
  );
});

client.login(process.env.TOKEN);