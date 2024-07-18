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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU0vc1NDWXN2TVhiTWtPT2ttUk1YbkVJcTNJbTcyOW1uajRCbG1aN29GZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm1EY2F2TkNSZHBBbmV5MW1mNEwrT1N5UVFyNk9ielpMcUx5eW50ZUtocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRDZmQXpPZlAyQ3hHTG8vZHZiR21JdGpsVStsNGF6dnFueVRSekVtaDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTEs2MC9KK2JSU2U4WHQzdmI0emJSQktjd2hjckZNazlXMm1McFJOMjNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJL2hkd3lVWDV0ejRKa3U0R3RSZUVkV0txNkFGTXFXOTAxNlIvUTAxVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZEMTZFRmtVSFZMakw4U0xNRW9LUXdxUnFESy9tazBaVUJMdjllT3YyMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1XbzZXNk41TUtMZG1qQ0dVRWdvbHJhSW1TRGtiQnd2TGlWT040dGpWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3AwaXpLT1B1cjFnUHRjK0hMUFNQTE51dEw4Q3NUZmdFc0taUlluMTh4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhhOXYyWnRxRTd0S0lxeDJiVVhodHVKMlJ0ODFPVGJ0Qzc4aElWWTlqdEFJRkxWd1FqWmUzYWdIcmI3S01LdjFRaTllWlhDNlZFci9Lc0FzVDFhamd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJpamhacVlaUVJnUldxVjZUemxTOUJVT0UyUFhYWmRheTNPZURtajBPZDU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNzk3MDkzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMzU3QkNBNkRDMzYwMTZERjg3MDkwRTAxOEY4Qzg1RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjg3MTYwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4WWFRWTFCQlQ3dU1sdHJYMllheG5nIiwicGhvbmVJZCI6IjU2NGQzYWI4LWVjODktNDAzZi1iY2M2LTZjN2VjNTg2NDRkNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVmNJZmF5ODFTWkVyZzh3d3dnWDRoaDJMbGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk9NY0ZJRFQ0ZExsSUUxc0d3aUNTRGdQeGprPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFOUU5GSkJFIiwibWUiOnsiaWQiOiIyNTQ3MDc5NzA5MzI6NDBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRXpyYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG1mdU5vQkVPZUQ0N1FHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjQydVNnUFJVQTRjanN3djFGaDdOYk1RMVNrTWhXZ05wek5WelpMRTkwMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaTdqREc0OXlHZXFub0hvVW40OE1HaktyZmhsOUZTUEFVY0ZXNGNDVTFIZzRCOVUxb2QrdjBISERreFhNdkhqUS8rVFhWY28rbWFDcG5sZmlvelFmQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjRiTVA3c1VrTjNuSGVDbXRSR2IwaS8vU1dyS3prUWNFbkNsRjM1N214R0xybmlCclVIdTVObnM4OHZZc1licUJNRlRZTTNwK3Z5bW9VVFcxNUNDMGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA3OTcwOTMyOjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcrTnJrb0QwVkFPSEk3TUw5Ullleld6RU5VcERJVm9EYWN6VmMyU3hQZE4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEyODcxNTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDdPIn0="
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
