const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const faiz = [
    "10%-Sizden arkadaş bile olmaz", 
    "20%-En büyük aşklar kavgayla başlar.",
    "30%-Belki ileride",
    "40%-Deneye bilirsiniz!",
    "70%-İdare eder",
    "80%-Sevgili",
    "100%",
    "Madison'daki bir matematik öğretmeninin sahip olduğu dünyanın en zeki domuzu çarpım tablosunu 12'lere kadar ezberlemişti.",
    " Antik Yunan'da zengin aile çocukları hayatları boyunca kılsız olmaları için doğdukları anda zeytinyağına batırılırlardı..",
    "Dünyanın en geniş yolu olan Brezilya'daki Anıtsal Eksen'de 160 araba yan yana gidebilir.",
    "Japon balıklarının hatırlama ömürleri yaklaşık 3 saniyedir.",
    "Gıda renklendiricileri eklenmeseydi eğer, kolanın rengi yeşil olurdu."
]
module.exports = {
  name: "aşk-ölç",
  description: 'Üyeye timeout atar/kaldırır',
  options: [
      {
          name: "member", //option ismi
          description: "timeout işlemi uygulanacak üye", 
          type: 6, 
          required: true 
      }
    
  ],
 run: async (client, interaction) => { 
  const member = interaction.options.getMember("member");
  const asık = interaction.member
  let fif = `https://media.tenor.com/0pMICRoCOoAAAAPo/fire-heart.mp4`

     const embedmrsn = new MessageEmbed()
     .setAuthor("LetCode",interaction.member.user.avatarURL())
     .setTitle(`Aşk Ölçer💞`)
     .setDescription(``)
        .setImage(fif)

     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embedmrsn]});


},
};