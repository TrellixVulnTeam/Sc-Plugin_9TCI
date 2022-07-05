let handler = async (m, { conn }) => {
let hyzer = 'https://api.zacros.my.id/randomimg/cosplay'
    conn.sendButtonImg(m.chat, hyzer, 
namabot, ownername, 'NEXT', '.cosplay', m)
}
handler.help = ['cosplay']
handler.tags = ['internet']
handler.command = /^(cosplay)$/i

module.exports = handler