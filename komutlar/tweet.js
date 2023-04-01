const { Client,  MessageEmbed, Permissions} = require("discord.js");
var request = require("request");

module.exports = {
  name: "tweet",
  description: "Kendi adınıza sahte bir tweet atarsınız.",
  type: 1,
  options: [
  
    {
        name:"metin",
        description:"Tweet'inde yazmasını istediğini yaz",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
 const text = interaction.options.getString("metin");


    await interaction.deferReply();

    request(`https://nekobot.xyz/api/imagegen?type=tweet&text=${encodeURI(text)}&username=${encodeURI(interaction.member.user.username)}&image=${encodeURI(interaction.member.user.avatarURL())}`, function (error, response, body) {

      if (error || !body || !JSON.parse(body).success)
        return interaction.editReply({
          embeds: [
            {
              color: client.settings.embedColors.red,
              title: '**»** Bir Hata Oluştu!',
              description: `**•** Hatanın sebebini bilmiyorum.`
            }
          ]
        });

      interaction.editReply({
        embeds: [
          {
            author: {
              name: `${interaction.user.username} • Tweet `,
            },
            image: {
              url: JSON.parse(body).message,
            }
          }
        ]
      });

    });

  }
};






//LetCode MrSn