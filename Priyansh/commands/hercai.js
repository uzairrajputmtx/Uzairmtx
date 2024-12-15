const axios = require("axios");

module.exports.config = {
  name: "hercai",
  version: "1.1.0",
  hasPermission: 0,
  credits: "SHANKAR SIR",
  description: "Hercai bot that answers using an AI API with smart reply detection",
  commandCategory: "AI",
  usages: "[your question]",
  cooldowns: 5,
};

let lastBotMessageID = null; // To track the bot's last message ID

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;

  // Trigger if "hercai" is mentioned or user replies to bot's message
  if (
    body && 
    (body.toLowerCase().includes("hercai") || (messageReply && messageReply.senderID === api.getCurrentUserID()))
  ) {
    const userQuery = body.toLowerCase().includes("hercai")
      ? body.toLowerCase().replace("hercai", "").trim()
      : body.trim(); // Extract query from reply or normal message

    // If no valid query, prompt user to ask something
    if (!userQuery) {
      return api.sendMessage("❓ कृपया अपना सवाल पूछें! Example: hercai कैसे हो?", threadID, messageID);
    }

    // Prepare API URL
    const apiURL = `https://api-shankar-sir.onrender.com/api/ai?ask=${encodeURIComponent(userQuery)}`;

    try {
      // Fetch response from the API
      const response = await axios.get(apiURL);

      if (response && response.data && response.data.reply) {
        // Send reply and save the bot's message ID
        const botReply = response.data.reply;
        const botResponse = await api.sendMessage(botReply, threadID, messageID);
        lastBotMessageID = botResponse.messageID; // Save the bot's message ID for reply detection
      } else {
        return api.sendMessage(
          "⚠️ Sorry! मैं आपका सवाल समझ नहीं पाया। कृपया फिर से प्रयास करें।",
          threadID,
          messageID
        );
      }
    } catch (error) {
      console.error("Hercai API Error:", error);
      return api.sendMessage(
        "❌ API से जवाब लाने में समस्या हुई। कृपया बाद में प्रयास करें।",
        threadID,
        messageID
      );
    }
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const userQuery = args.join(" ");

  if (!userQuery) {
    return api.sendMessage("❓ कृपया अपना सवाल पूछें! Example: hercai कैसे हो?", threadID, messageID);
  }

  // Prepare API URL
  const apiURL = `https://api-shankar-sir.onrender.com/api/ai?ask=${encodeURIComponent(userQuery)}`;

  try {
    // Fetch response from the API
    const response = await axios.get(apiURL);

    if (response && response.data && response.data.reply) {
      // Send reply and save the bot's message ID
      const botReply = response.data.reply;
      const botResponse = await api.sendMessage(botReply, threadID, messageID);
      lastBotMessageID = botResponse.messageID; // Save the bot's message ID for reply detection
    } else {
      return api.sendMessage(
        "⚠️ Sorry! मैं आपका सवाल समझ नहीं पाया। कृपया फिर से प्रयास करें।",
        threadID,
        messageID
      );
    }
  } catch (error) {
    console.error("Hercai API Error:", error);
    return api.sendMessage(
      "❌ API से जवाब लाने में समस्या हुई। कृपया बाद में प्रयास करें।",
      threadID,
      messageID
    );
  }
};
