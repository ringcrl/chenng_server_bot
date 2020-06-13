import Telegraf from 'telegraf';
import axios from 'axios';
import logger from './logger';

import { config } from './config';
import agent from './agent';
const { token } = config;

const bot = new Telegraf(token, {
  telegram: {
    agent: agent?.https
  }
});

bot.catch((err: Error) => logger.error(err.stack || err.message));

function getHelpText() {
  return `
    cc <words>: 获取 <words> 的中文翻译
  `;
}

bot.start((ctx) => ctx.reply(getHelpText()));
bot.help((ctx) => ctx.reply(getHelpText()));

// cc <words> 翻译句子
bot.hears(/^cc\s(.+)/gi, async (ctx) => {
  const text = ctx.match[1];
  const translateApi =
    'https://service-caok7qff-1257430323.bj.apigw.tencentcs.com/release/translate?text=';
  const res = await axios.get(translateApi + text);
  ctx.reply(res.data);
});

bot.launch();

logger.info('ready');
