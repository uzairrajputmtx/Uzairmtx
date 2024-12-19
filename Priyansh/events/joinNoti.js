module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "uzairrajput",
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Assalamualaikum Everyone 😇✨", event.threadID, () => api.sendMessage({body:`🌺 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨\n𓆩『 ⸙ 𝑫𝑰𝑾𝑨𝑵𝑰 𝑻𝑬𝑹𝑰 』𓆪 【 𝑩𝑶𝑻 】 🦋🌺 CONNECTED«\n

𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝑴𝒂𝒅𝒆 𝑩𝒚 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨
\n◈ ──────────────── 💚✨
BOT CONNECTED SUCCESFUL !!! 

APPROVAL ALLOW IN THIS GROUP!!!
\n◈ ──────────────── 💚✨
USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
\n◈ ──────────────── 💚✨
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER MUHAMMAD UZAIR RAJPUT MTX\n◈ ──────────────── 💚✨

𝑶𝒘𝒏𝒆𝒓: 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿\n◈ ──────────────── 💚✨

♻️Facebook: 

https://www.facebook.com/Mtxuzair\n◈ ──────────────── 💚✨

Youtube Site : https://youtube.com/@itxuzair449?si=pO1Dv9pz2BmyK3Rc\n◈ ──────────────── 💚✨

☢️ INSTAGRAM: 

https://www.instagram.com/itxuzair449/profilecard/?igsh=bzRuemE4cWE0cDBy￼\n◈ ──────────────── 💚✨

☣️Email: uzairrajput1267@gmail.com\n◈ ──────────────── 💚✨

⚠️Wp: +92 3198188449\n◈ ──────────────── 💚✨ credit:-𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨`, attachment: fs.createReadStream(__dirname + "/cache/uzair.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞   𝐓𝐨  𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 💚✨ 𝐁𝐨𝐭  😇◈ ──────────────── 💚✨\n◈ ──── 💚✨  𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ◈ ──── 💚✨\n◈ ──────────────── 💚✨\n\n◈ ──── 💚✨ 🆆 🅴🅻🅻 🅲🅾🅼 🅴 ◈ ──── 💚✨\n\n◈ ──── 💚✨ 𝐍𝐄𝐖 ◈ ──── 💚✨\n\n◈ ──── 💚✨ 🇲‌ 🇪‌ 🇲‌ 🇧‌ 🇪‌ 🇷‌ ◈ ──── 💚✨\n\n◈ ──────────────── 💚✨ [   {name} ]\n◈ ──────────────── 💚✨\n◈ ──── 💚✨ 𝐌𝐘 𝐆𝐑𝐎𝐔𝐏 ◈ ──── 💚✨\n\n{threadName}\n\n◈ ──── 💚✨ 🥀 𝐇𝐀𝐏𝐏𝐘 𝐄𝐍𝐉𝐎𝐘 🥀 ◈ ──── 💚✨\n\n◈ ──── 💚✨ 🥀 𝐌𝐀𝒁𝐄 𝐊𝐀𝐑𝐎 🥀  ◈ ──── 💚✨\n◈ ──────────────── 💚✨ 𝐎𝐑 𝐓𝐔𝐌 𝐈𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐄  {soThanhVien} 𝐌𝐄𝐌𝐁𝐀𝐑 𝐇𝐎 𝐄𝐍𝐉𝐎𝐘 𝐊𝐀𝐑𝐎 𝐌𝐀𝒁𝐄 𝐋𝐎 【 . 】 ◈ ──────────────── 💚✨\n\n◈ ──────────────── 💚✨\n◈ ──── 💚✨ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ◈ ──── 💚✨\n\n☟  ◈ ──── 💚✨ ☟ ◈ ──── 💚✨  ☟\n\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 🌹\n◈ ──────────────── 💚✨" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }
