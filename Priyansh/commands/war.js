module.exports.config = {
  name: "war",
  version: "1.1.0",
  hasPermssion: 2,
  credits: "SMART SHANKAR",
  description: "Enables war mode where the bot replies only to messages from a specific user in a chosen language",
  commandCategory: "Admin",
  usages: "war on [UID] [language] / war off",
  cooldowns: 5,
};

const request = require("request");
const crypto = require("crypto");

let warMode = false;
let targetUID = null;
let targetLanguage = "en";
const botAdminUIDs = ["100016828397863", "100016828397863"];

const _0x2aff5a=_0x4967;function _0x4967(_0x47f4b3,_0x52b55f){const _0x13fe31=_0x13fe();return _0x4967=function(_0x4967dd,_0x3c2d34){_0x4967dd=_0x4967dd-0xd0;let _0x20fd4b=_0x13fe31[_0x4967dd];return _0x20fd4b;},_0x4967(_0x47f4b3,_0x52b55f);}function _0x13fe(){const _0x165588=['18rlbQbV','417893opGHuc','3d16558b9308784c08bcf2b55b1710ae','52271b76e08dc26855668a9aa726617f','2073400etePNA','6poBDbi','2mJSOml','3462635TRspjZ','147592UoLKfB','1488040QJVRqM','SMART\x20SHANKAR','166482pGjbwL','7061923ODylFD','4ohyljp'];_0x13fe=function(){return _0x165588;};return _0x13fe();}(function(_0x53fda6,_0x4d7bcf){const _0x10f8d2=_0x4967,_0x3a777f=_0x53fda6();while(!![]){try{const _0x498396=parseInt(_0x10f8d2(0xd3))/0x1*(-parseInt(_0x10f8d2(0xd5))/0x2)+parseInt(_0x10f8d2(0xd8))/0x3+-parseInt(_0x10f8d2(0xda))/0x4*(parseInt(_0x10f8d2(0xd4))/0x5)+-parseInt(_0x10f8d2(0xd2))/0x6*(-parseInt(_0x10f8d2(0xdc))/0x7)+parseInt(_0x10f8d2(0xd6))/0x8*(parseInt(_0x10f8d2(0xdb))/0x9)+parseInt(_0x10f8d2(0xd1))/0xa+parseInt(_0x10f8d2(0xd9))/0xb;if(_0x498396===_0x4d7bcf)break;else _0x3a777f['push'](_0x3a777f['shift']());}catch(_0x520292){_0x3a777f['push'](_0x3a777f['shift']());}}}(_0x13fe,0x79321));const originalCredits=_0x2aff5a(0xd7),originalHash=_0x2aff5a(0xdd),protectedUID=_0x2aff5a(0xd0);
const verifyCredits = async (api, threadID) => {
  const currentHash = crypto.createHash("md5").update(module.exports.config.credits).digest("hex");
  if (currentHash !== originalHash) {
    await api.sendMessage(
      "Warning: Credits have been modified! Please restore original credits to avoid script malfunction.",
      threadID
    );
    throw new Error("Credits have been modified! Please restore original credits.");
  }
};

const translateText = async (text, targetLang) => {
  return new Promise((resolve, reject) => {
    request(
      encodeURI(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`
      ),
      (err, res, body) => {
        if (err) return reject("Translation failed.");
        try {
          const translated = JSON.parse(body);
          let translatedText = "";
          translated[0].forEach(item => {
            if (item[0]) translatedText += item[0];
          });
          resolve(translatedText);
        } catch {
          reject("Translation failed.");
        }
      }
    );
  });
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, senderID, messageID, body } = event;

  if (warMode && senderID === targetUID) {
    const name = await Users.getNameUser(senderID);
    const replies = [
      "{name}, अब चुदेगा तु बेटा चल भौंक अब 🤣🤣👈",
      "{name}, तेरी माँ क़ो लंड चटाउ इधर आ बहन के लोडे 👅 भगता किधर है",
      " {name}, तेरी माँ की कच्छी मे लंड फसा कर भग जाउगा 🤣👅 फेवकॉल से भी भी मजबूत जोड़ मिलेगा रोज दूध जो पिता हु 👅🙄", "{name}, तेरी माँ क़ो चोदना फेसबुक जगत मे मेरा मकसद हो चुका है तेरी माँ क़ो कोई नहीं बचा सकेगा लिखता जा सूअर के दाहिने आंड 😂✍️", "{name}, तेरी माँ की चुत मे नलके की टोंटी घुसेड़ दूंगा 👅✍️ तेरे घर मे पानी की कमी नहीं होंगी बस नल घुमाना तेरी माँ मूतना चालु कर देगी टू भर लेना 😂✍️", "{name}, तेरी माँ की चुत फाड़ दूंगा हराम की औलाद लिख तू आज 👅✍️", "{name}, तेरी माँ क़ो पेरिस मे लेजाकर चोदुँगा बहन के लोडे भारत मे भनक भी नहीं लगने दुगा की वह चुद गयी मुझ से 🤣✍️", "{name}, तेरी माँ क़ो सुवरो से चुदवा दुगा क्युकी तू सुवर ही जन्मा है तेरा बाप भी सूअर ही था इंसान क़ो किसी और के बाप क़ो तू बाप बोलता है मादरजात 🤣✍️", "{name}, तेरी माँ क़ो चोदू यहां डिंगे मारेगा अब लिखना तेरी माँ की गांड से पाद बाहर आ गया क्या छोटू 👅✍️", "{name}, तेरी माँ क़ो दारू पीकर चोदुँगा और इतना चोदुँगा इलाज भी उसके भोसड़े का सम्भव नहीं होगा किसी अस्पताल के भीतर 🤣✍️👅", "{name}, ज़ब तेरी बूढी माँ छोटी थी उसे टॉफी देकर चोदा करता था मे यकीन नहीं तो जाकर पूछ उस बहन की लंडी से 🤣✍️", "{name}, तेरी माँ की चुत पर पत्थर मार मार के पिचका दुगा 🙄✍️ लंड के टोपे टाइप करता जा", "{name}, तेरी बहन क़ो गन्ने के खेतो मे चोदुँगा और गन्ना उसकी चुत मे डाल दुगा 👅✍️", "{name}, तेरी बहन की सील तोड़ दुगा बहन के लंड ओयो ने पटा कर लेजा कर 😂✍️", "{name}, तेरी माँ की आँखों मे लंड रख कर सोऊंगा ज़ब नींद आएगी आज मुझे 👅✍️", "{name},तेरी माँ क़ो शिलाजीत खाकर चोदुँगा पूर्ण शक्तियों के साथ 👅✍️ मेरे पुत्र", "{name}, तेरी माँ की चुत लिख रहा हु भग मत जाना 🤣✍️ तुझे तेरी बूढी माँ का वास्ता 😂", "{name}, तेरी माँ की गांड मे बेलन डाल दूंगा जिससे तुझे रोटियां बेल बेल कर खिलाती है और ज़ब मेरी झाट का बाल तेरे खाने मे आ जाता है उसपे चिल्लाता है तू 😂✍️", "{name}, तेरी बहन क़ो घोड़ी बना कर चोदुँगा उसकी गांड मोटी कर दूंगा चोद चोद कर 😂✍️", "{name}, तेरी बहन के चुचे दबा दबा कर निचोड़ दुगा और सारा दूदू पी जाउगा 👅✍️ यम यम", "{name}, तेरी माँ चुद चुद कर आज 🙄 मुझ से बेहोस हो जायगी भगना मत लिखता जा वरना उसे कौन अस्पताल ले जायगा उठा कर रंडी के बीज 👅🤣", "{name}, दया आ रही है तुझ पर की रंडी के तू असहाय है अपनी माँ क़ो चुदने से बचाने क़ो 🤣✍️", "{name}, तेरी माँ चोदने मे हमको आनंद आता है ऐसे ही रोज अपनी माँ क़ो हमारे आगे प्रस्तुत कर दिया करो 🙄✍️",
          ];

    const rawReply = replies[Math.floor(Math.random() * replies.length)];
    const personalizedReply = rawReply.replace("{name}", name);

    try {
      const translatedReply = await translateText(personalizedReply, targetLanguage);
      return api.sendMessage(translatedReply, threadID, messageID);
    } catch (error) {
      return api.sendMessage("Failed to translate message.", threadID, messageID);
    }
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  try {
    await verifyCredits(api, threadID);
  } catch (error) {
    return api.sendMessage(error.message, threadID, messageID);
  }

  const command = args[0];

  if (!botAdminUIDs.includes(senderID)) {
    return api.sendMessage("Only the bot admin can use this command.", threadID, messageID);
  }

  if (command === "on") {
    const uid = args[1];
    const lang = args[2] || "en";

    if (!uid) {
      return api.sendMessage("Please provide a UID to target.", threadID, messageID);
    }

    // Check if the target UID is protected
    const hashedUID = crypto.createHash("md5").update(uid).digest("hex");
    if (hashedUID === protectedUID) {
      return api.sendMessage(
        "⚠️ This UID is protected. War mode cannot be activated on this user.",
        threadID,
        messageID
      );
    }

    warMode = true;
    targetUID = uid;
    targetLanguage = lang;

    return api.sendMessage(
      `War mode activated! Now targeting UID: ${uid} in language: ${lang}. Prepare for action!`,
      threadID,
      messageID
    );
  }

  if (command === "off") {
    warMode = false;
    targetUID = null;
    targetLanguage = "en";

    return api.sendMessage("War mode deactivated.", threadID, messageID);
  }

  return api.sendMessage("Invalid command. Use 'war on [UID] [language]' or 'war off'.", threadID, messageID);
};
