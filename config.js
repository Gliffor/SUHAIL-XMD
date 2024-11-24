const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742798919";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_22_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZNWgreno1eWZ0RnRMVldvZEc0ZkJnTjQrcUcvZmk0bTdyMEdFZnFWN0ZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSLVE4aTlnb1NlLTlMWlZhcVZ4MVN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYzNmRiYzMzLTAyOGQtNDEyMy1iNjQ3LWRjNGZjYjg5MDliNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDEyNixcbiAgICAgIDIyNCxcbiAgICAgIDIxLFxuICAgICAgMjE1LFxuICAgICAgOTQsXG4gICAgICAyMjQsXG4gICAgICAyNDgsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDIyLFxuICAgICAgMjIzLFxuICAgICAgMTk5LFxuICAgICAgNjIsXG4gICAgICA2MSxcbiAgICAgIDMzLFxuICAgICAgMjI2LFxuICAgICAgMjM2LFxuICAgICAgODgsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNDksXG4gICAgICAzMCxcbiAgICAgIDE0MSxcbiAgICAgIDgxLFxuICAgICAgMTM0LFxuICAgICAgMTAwLFxuICAgICAgMTMxLFxuICAgICAgMjAxLFxuICAgICAgMTI4LFxuICAgICAgMjMwLFxuICAgICAgMTk3LFxuICAgICAgMjIyLFxuICAgICAgMjA1LFxuICAgICAgMTI2LFxuICAgICAgODIsXG4gICAgICAyMDYsXG4gICAgICAyMjcsXG4gICAgICAxOCxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldHRTVRQ0QxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDI3OTg5MTk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTQ2Njc2NzQ4NzIyMzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKLzYvcXNHRUtmRWk3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkt5N1NVN3hiMzdXd2djMU5aNTl4T3pIZE53ZnpoL2ZvTzRyT3NtOXdwMHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiakhwTWJYcVlFUVNzaHFyN2dBaGpGejJEQUUrOEFnUXBlQTRJY3loMDNHNUcyUElEQVZIM1dBZWVhR2cwdHZlOU8wakpEUlB0bFBpLzcwajIxWGYzQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVldvUi9xV2I2RDlTSVNNYnNsYjAxSkNaQ3FZOEtNQ0pqV1FiMzB5L0M3dWRDOWdXeDd5a2FldjBoVGh5Vk5FcWxkN0lJSHNNREdGNjdtQUdKVXBMaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQyNzk4OTE5OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDM2NTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUorXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVbFJyN3REZlVOWndzYkhpalVTNkY1ZVlqWDRxemc4MG1DTUhXNENzS1ZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDI4NzAzMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIxNjQxNjg1NTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
