export type Config = {
  token: string;
  proxy: {
    protocol: string;
    host: string;
    port: string;
  };
};

const dotenv = require('dotenv');
dotenv.config();

export const config: Config = {
  token: process.env.RSSBOT_TOKEN || '',
  proxy: {
    protocol: process.env.PROXY_PROTOCOL || null,
    host: process.env.PROXY_HOST || null,
    port: process.env.PROXY_PORT || null
  }
};
