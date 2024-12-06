const fs = require("fs");
module.exports.config = {
	name: "hellp",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Allah Hafiz", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Allah hafiz")==0 || event.body.indexOf("Allah Hafiz")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("bye")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/Allah_hafiz.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
