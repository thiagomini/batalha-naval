require('dotenv-safe').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.dev'
});
