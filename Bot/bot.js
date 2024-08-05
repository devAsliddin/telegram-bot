import { Telegraf } from 'telegraf';

const TOKEN = '6996331246:AAGtfEXNbAKM-NdgAeQ346kW7VTzH0UkxB4';
const bot = new Telegraf(TOKEN);

const web_link = 'https://payment-app-for-fixed-uz.netlify.app/';

bot.start((ctx) => {
  ctx.reply('Welcome to fixed uz bot', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'web app',
            url: web_link,
          },
        ],
      ],
    },
  });
});

bot.launch();
