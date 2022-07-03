let handler = async m => m.reply(`
            .✵.𝗚𝗥𝗨𝗣 𝗣𝗘𝗡𝗧𝗔𝗕𝗢𝗧.✵.

            https://chat.whatsapp.com/ElBB5NrJS637TYqjJLHuk2
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler