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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_52_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5V01IZGdRUGNKbm9JS3NHM2FxQk1aODFGbzlKaVNWRlk3TDFZZzVFN2g4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJESmhqX1hIRFJUTzVoaV9LVU5kc2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3OGJlODAyLTQ5ZGMtNGM3Ny05MmU5LTBjZjVmYTg2NThkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxNDMsXG4gICAgICAxMjUsXG4gICAgICA4NCxcbiAgICAgIDE1OCxcbiAgICAgIDE4MSxcbiAgICAgIDQ1LFxuICAgICAgMTU4LFxuICAgICAgMTQ3LFxuICAgICAgMjI2LFxuICAgICAgNzEsXG4gICAgICAxMjgsXG4gICAgICAzNixcbiAgICAgIDIxMSxcbiAgICAgIDIzMSxcbiAgICAgIDEwMixcbiAgICAgIDY4LFxuICAgICAgMTM0LFxuICAgICAgMjYsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgOTcsXG4gICAgICA3NyxcbiAgICAgIDgzLFxuICAgICAgOTIsXG4gICAgICAxNCxcbiAgICAgIDU0LFxuICAgICAgMTUsXG4gICAgICAxOTcsXG4gICAgICAyNixcbiAgICAgIDI0MSxcbiAgICAgIDIyNSxcbiAgICAgIDIwNyxcbiAgICAgIDE1MSxcbiAgICAgIDI0NCxcbiAgICAgIDY1LFxuICAgICAgMTU3LFxuICAgICAgMTI4LFxuICAgICAgNDksXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFpTTVFZTkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0Mjc5ODkxOToyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ1NDY2NzY3NDg3MjIzOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUNi9xc0dFTmpMdDdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3k3U1U3eGIzN1d3Z2MxTlo1OXhPekhkTndmemgvZm9PNHJPc205d3Awdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6dW9hcjdqeWFaR0tjeUJNd29jNWt2QXZkZFZCbjRlT1pvYVJyQWh6REhLd2tRQUMvVUxXWnpLcS9lYkpWVUF2L1N2V2NEYWtJdDQrWGFROVZIRHpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0bkVnbTE5dCtiSkViWHFNQVBDUGQ2RkIwS3hLR0huZmpaVU1XcTlVQ0tVZjNzQThQWXZremdLQWV1Y3M4WE56aGVmVW0zWGUvS2lCWGRsTFlwUGNndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDI3OTg5MTk6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNTgzNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFSitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVKKy5qc29uIjogIntcImtleURhdGFcIjpcIlVsUnI3dERmVU5ad3NiSGlqVVM2RjVlWWpYNHF6ZzgwbUNNSFc0Q3NLVkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMjg3MDMwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjE2NDE2ODU1NlwifSIKfQ=="  // PUT your SESSION_ID 


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
