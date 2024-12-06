const fs = require("fs");
module.exports.config = {
	name: "react",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("shan") || react.includes("shaan") || react.includes("Shan") ||
react.includes("Shaan") ||
react.includes("admin")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ✦𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍✦

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://www.facebook.com/𝚜𝚑𝚊𝚊𝚗 uid👉✨100016828397863✨



★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊✦`,attachment: fs.createReadStream(__dirname + `/noprefix/1711824855739.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
