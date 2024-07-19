//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kajoxjoe@gmail.com";
global.location = "Kitale,Kenya.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://dailycannon.com/static/uploads/2023/09/arsenal-fc-v-psv-eindhoven-group-b-uefa-champions-league-2023-24-5.jpg";
global.devs = "254768370578";
global.sudo = process.env.SUDO || "254768370578";
global.owner = process.env.OWNER_NUMBER || "254768370578";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";

global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.userImages = process.env.USER_IMAGES || "https://dailycannon.com/static/uploads/2023/09/everton-fc-v-arsenal-fc-premier-league-4-1024x682.jpg";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFFdlVTWVA4cHV6UmNRR28zZENHTFE4anJJQlJRSGdiOVJDT0tLYzNWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjVTR1JJd2JuOHF0d3RzMHBaU0VvcE9iRm5kRnFlMUtzWnNMa0dac3NoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUGVLVk83OExIMDI5Q2ZUSzIwekpqZUtXc1pVQ2VQd3lqTXBaRkJtcG5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaNWVWcFFuUXRiSHpjUjVhL3dMbVZCb1AySThIdUMwK3RITjFVWlhIZzNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHODNEL3pxcVVQZnlObzQ1K2VVcDZINFZsRUJXN0lvNkhRYWFjalZKMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNZc05DK3drcmUvajhxTGtlUVZ1eVRiR05CeVlrc2gwbWtxNWc3MVhZQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hXWFU0cXpPZGcxWDNhS3JYT0JMQWxsaHJCMlQ5R3F6WWdWcFV0ajVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmNxVkxINjhwQXJRR3ZrUVNGbkdtV2crb0F4Wk00Q1paNzBBRitDMmVtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1bWdmRUprZ2F0QVUvN0Q5MTJIbTd0MS9tUi8zdVlGZ1ozeGxyaitIRTJEVnk5VmtyYnFjaVp4WSt1YjVueWpCVjcrdlpKcDQwZWtHRnZJdk5iNkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJUZHNCODV4cjhHdEJPQWxacHFFSTFrSURCK3Y5NWJUSWU2T1FLT2d0WWFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXY291OUJKcFRpR0FSUG5JZVdsdkZ3IiwicGhvbmVJZCI6ImRmN2QzZTZlLWQzMGItNDg2ZC1iYmQyLTg1YWY1ZTA3MDEzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJac3RCS0ZycTV5eVdVcWg5TWI0TFlEN2V0dnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzIrb0JubjR3TU9HM1Nwb0JGQTJIZUFsY253PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY3RllERlhIIiwibWUiOnsiaWQiOiIyNTQ3MDc5NzA5MzI6NDNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtZnVOb0JFSS9JNnJRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI0MnVTZ1BSVUE0Y2pzd3YxRmg3TmJNUTFTa01oV2dOcHpOVnpaTEU5MDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJhMGtNMmhzZEwwV2pyNDdYbmVuMWc1Z3FYSzBaREdhZWJmOXpqbXRHeFBMeksyZTNrSHI5ZmpobG9wbXJHbjB2NEZLekU0T2RIcDFHV0dNZ3RKSEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGN3dNRklrcEh2WWtZR0RIT2hTS1k2SDAwSGhScGtjQXV3V0pNNHJ0cDZxRldKNU85eE9aRUVQUUEvVmUvbVR2c0xQeC9XeUZGZVpTSllWNnllOGVEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNzk3MDkzMjo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXK05ya29EMFZBT0hJN01MOVJZZXpXekVOVXBESVZvRGFjelZjMlN4UGROIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDEwNTkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQ3TyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Powered by Jonnie the Great-The best bot programmer.",
  author: process.env.PACK_AUTHER || "Jonnie-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "KaJonex-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "Jonnie",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Trossard").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
