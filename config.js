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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795205406";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_02_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia3RuUmUrbmExMHFRNndjZGgwUldOalB0WlFrWXJQYTg3bGxkNFJYZXZWWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTUyMDU0MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1Mjg3QjUzQUZEMEUyMjJFRjZBMURENzk1NDhCRDVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzI0NTM0NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NTIwNTQwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUYzQjI0ODdENUY0RTJFNDg5NjkxRDQ5OEQyNDhDMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMjQ1MzQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMixcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBCRklLVVg5VENDcnRTQmJOUHJ4U2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWVlNWE4ODYtMWUxYS00Y2Q1LTkxZmQtMjUzMDA1MzIwNTJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE0MixcbiAgICAgIDU3LFxuICAgICAgMTU4LFxuICAgICAgNjgsXG4gICAgICA0LFxuICAgICAgNjksXG4gICAgICAxNjgsXG4gICAgICA4OCxcbiAgICAgIDE4MixcbiAgICAgIDI0OCxcbiAgICAgIDE2NixcbiAgICAgIDEwMyxcbiAgICAgIDIzOCxcbiAgICAgIDgyLFxuICAgICAgMTkzLFxuICAgICAgOTMsXG4gICAgICAzNyxcbiAgICAgIDczLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA5MyxcbiAgICAgIDE1NyxcbiAgICAgIDIzMixcbiAgICAgIDEyNSxcbiAgICAgIDI0LFxuICAgICAgNDIsXG4gICAgICA5OCxcbiAgICAgIDIxNixcbiAgICAgIDIwNyxcbiAgICAgIDExOCxcbiAgICAgIDE4MixcbiAgICAgIDg1LFxuICAgICAgMjIzLFxuICAgICAgMTgzLFxuICAgICAgMTUyLFxuICAgICAgMTExLFxuICAgICAgMTQyLFxuICAgICAgMjI4LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzcyQjJWV0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NTIwNTQwNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDU3MTE2MTQxNDA0NzA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJWaW5jZW56b/CfkqXwn5Kv8J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qWXdNTUhFSmZ6dkxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3F1K1ZUMW1SMEFBNmVDSnNYS2lVeFk2QWhXbWhiRjBnZnZuUmlHSmZ6az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1Z2RBNFp4MmtHdE1kRHpNbUdXdk5ram9JSU1wZm9uUFd1L3JGdC9UNzdwbGp0ZWQ2TlF1bCtoQStHSTAzV0hPL1lyWDN3VmY4ampqYkh6Sjc5Z3FEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyM2c3OGg5Vml5Z2p3dnJwbDVJdzR2WEJIa2Yvc0hDbmNjY2x6RklRN213V21QU3FsdURlNWdiOXgwNHhZd1JVNFl0c1lEekxPelk0WWFYWjF6eUpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTUyMDU0MDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMjQ1MzM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnl2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKeXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyd3Ryd0dtR2k4dXRmVzV0ZzBJeGdyVGkralh3ZVFnQmdQRkk2ekdwNm9zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjA2MTczMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzI0NTM0MjEyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
