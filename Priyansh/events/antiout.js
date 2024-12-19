module.exports.config = {
 name: "uzairrajput",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "uzairrajput",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "𝑲𝑰𝑶 𝑨𝑰𝑺𝑬 𝑷𝑰𝑪𝑯𝑬 𝑺𝑬 𝑳𝑨𝑻 𝑴𝑨𝑹𝑻𝑨 𝑯𝑨𝑰 𝑲𝑰𝑨..? 🫤";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐒𝐨𝐫𝐫𝐲 𝑴𝑻𝑿 🙏 ${name} 𝑴𝑬 𝑰𝑺𝑲𝑶 𝑷𝑯𝑰𝑹 𝑺𝑬 𝐀𝐝𝐝 𝑵𝑨𝑯𝑰 𝑲𝑨𝑹 𝑺𝑨𝑲𝑻𝑰 𝐆𝐫𝐨𝐮𝐩 𝑴𝑬 🥺 𝑰𝑺 𝑵𝑬 𝑴𝑼𝑱𝑯𝑬  𝐁𝐥𝐨𝐜𝐤 𝑲𝑰𝑨 𝑯𝑼𝑨 𝑯𝑨𝑰 😕`, event.threadID)
   } else api.sendMessage(`𝑲𝑨𝑯𝑨 𝑱𝑨 𝑹𝑨𝑯𝑬 𝑯𝑶 ۔ ${name} 𝑩𝑬𝑻𝑨 😛 ,🥀𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿🌴 𝑲𝑬 𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝑲𝑬 𝑩𝑰𝑵𝑨 𝑻𝑼𝑴 𝑲𝑨𝑯𝑰 𝑵𝑨𝑯𝑰 𝑱𝑨 𝑺𝑨𝑲𝑻𝑬 -😄 𝑫𝑬𝑲𝑯𝑶 𝑩𝑨𝑩𝒀 𝑴𝑨𝑰𝑵𝑬 𝑻𝑼𝑴𝑯𝑬 𝑷𝑯𝑰𝑹 𝑺𝑬 𝑨𝑫𝑫 𝑲𝑨𝑹 𝑫𝑰𝒀𝑨 𝑯𝑨𝑰 😄-😌 𝑩𝑨𝑩𝒀 𝑴𝑬𝑹𝑬 𝑯𝑶𝑻𝑬 𝑯𝑼𝑬 𝑻𝑼𝑴 𝑲𝑨𝑯𝑰 𝑵𝑨𝑯𝑰 𝑱𝑨 𝑺𝑨𝑲𝑻𝑬.😂🤣`, event.threadID);
  })
 }
}
