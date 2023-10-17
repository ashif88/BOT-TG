// t.me/Ashif_code_snippet_bot
const axios=require('axios');

const { Telegraf } = require('telegraf');

require('dotenv').config();

const api=process.env.api_key;

const bot = new Telegraf(api);



bot.start((ctx)=> ctx.reply('Welcome to the new code snippet bot from Ashif'));

bot.command('whomadethis',(ctx)=> ctx.reply('Ashif Akhtar'));


bot.command('DSU', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/ashif88/Algorithms-Implementation/master/DSU.cpp');
    return ctx.reply(response.data);
});


bot.on('sticker',(ctx)=>ctx.reply('👌'));


bot.launch(); 