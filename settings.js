//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +2348162195613
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"GE4zT3aDDJqerQg6+INSfcpyf9MEOcScvV+11TcXl1I="},"public":{"type":"Buffer","data":"gCwDkZSLs4DBwH+X3bnJtO0bU0f16cOcKOOMp+h1gyg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cNkBt+3rtXtpgTvC2d8MgUi+j8QLhYT6ix02sJlPXmQ="},"public":{"type":"Buffer","data":"mMcdBLS94/ALQQoKfvOcN2JocP2EARg/F6wCCXDcNxo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sDcTTm9Oyx2+spwaXFxDkgKboa4V56mcZyshDhmbImg="},"public":{"type":"Buffer","data":"7siewHEaSzKEmRmjqupEPuQTUXHCsUIYtODfMJMWqD0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2PrV/DYSqS5MFdJgTbipu8Izyqep3QBk+7J3uf/EXVU="},"public":{"type":"Buffer","data":"qCeFmYdLnds6lEBU5hcXTfXK1d4bcS8IY6TPlQG0SgY="}},"signature":{"type":"Buffer","data":"reppXCfXAv6XswuUReUBdknLnHhHnb15JU3j8GgUJoa0ej/MFa19w67mdBkK1xibk+L/xf8i1A/8dknuiojJgA=="},"keyId":1},"registrationId":164,"advSecretKey":"wRjwzSSjvLiJEbLAyl++9hrV3hTyr9mo8QxotGjaW50=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"mwItr7WNQYK6MdWiaAYVZg","phoneId":"0c87f1c4-c39d-4b75-b64f-770cda2a33ec","identityId":{"type":"Buffer","data":"8oSlYN8uPMiAmwK8PA5zs7O0rSE="},"registered":true,"backupToken":{"type":"Buffer","data":"4HesODzm8G+CKzLINWkBynuKDkQ="},"registration":{},"pairingCode":"52E4SFFZ","me":{"id":"2348065318228:8@s.whatsapp.net","name":"Divsey","lid":"273916220207262:8@lid"},"account":{"details":"CK/dmcICENHP6rgGGAEgACgA","accountSignatureKey":"SXpcYTqxlPLXopD9QwL8mluokdnRsU3nPJDFEItr8jE=","accountSignature":"geOvYtaiNj9/xDD4wZRMOMWas++//TUSl8LdYcBMctjZJ2kAu4rsp/eWancFhuB87xGFs3qjl8xKriugvSZgDA==","deviceSignature":"XSZuNoiqSj+laopk1cRQnNTp25lnUAWxWtWWPlCEtdocqkPQfBt1iLc3a4sRlBc902pWF7YLezsO1KJ59orJhQ=="},"signalIdentities":[{"identifier":{"name":"2348065318228:8@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUl6XGE6sZTy16KQ/UMC/JpbqJHZ0bFN5zyQxRCLa/Ix"}}],"platform":"smba","lastAccountSyncTimestamp":1729800147}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "Nigeria, Benin, Edo" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '2348162195613' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+2348162195613"
global.creator = "2348162195613@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348162195613"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '234' //set autoblock country code
global.antiforeignnumber = '234' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
