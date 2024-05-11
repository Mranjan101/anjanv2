const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "Anjan support",
    type: "support"
}, async (message) => {
    const name = '〆͎𝐌𝐫-𝐚𝐧𝐣𝐚𝐧👀🦋 ː͢»🎈', title = "〆͎𝐌𝐫-𝐚𝐧𝐣𝐚𝐧👀🦋 ː͢» 𝙎𝙐𝙋𝙋𝙊𝙍𝙏🦋", number = '919883457657', body = "〆͎𝐌𝐫-𝐚𝐧𝐣𝐚𝐧👀🦋 ː͢»";
    const image = "https://i.imgur.com/V2DZbd7.jpeg", sourceUrl = 'https://chat.whatsapp.com/HBf3zvaGyRaEfMZlKgUSPV';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 〆͎𝐌𝐫-𝐚𝐧𝐣𝐚𝐧👀🦋 ː͢»;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});
