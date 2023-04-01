const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const faiz = [
    "10%-Sizden arkadaş bile olmaz", 
    "20%-En büyük aşklar kavgayla başlar.",
    "30%-Belki ileride",
    "40%-Deneye bilirsiniz!",
    "70%-İdare eder",
    "80%-Sevgili",
    "100%-Aşık"
]
module.exports = {
  name: "aşk-ölç",
  description: 'Aşk ölçer',
  options: [
      {
          name: "üye", 
          description: "üye seç", 
          type: 6, 
          required: true 
      }
    
  ],
 run: async (client, interaction) => { 
  const member = interaction.options.getMember("member");
  const asık = interaction.member
  const durum = faiz[Math.floor(Math.random() * faiz.length)]

  let fif = `https://media.tenor.com/0pMICRoCOoAAAAPo/fire-heart.mp4`

     const embedmrsn = new MessageEmbed()
     .setAuthor("LetCode",interaction.member.user.avatarURL())
     .setTitle(`**\ ${durum} \**💞`)
     .setDescription(``)
        .setThumbnail(fif)

     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embedmrsn]});


},
};

















//LetCode MrSn