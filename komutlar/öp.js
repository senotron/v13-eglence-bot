const { MessageActionRow } = require("discord.js");
const { MessageButton } = require("discord.js");
const { MessageEmbed } = require("discord.js")
module.exports = {
    name:"öp",
    description: 'Herhangi kullanıcıyı öpersin',
    options: [
        {
            name:"user",
            description:"Kullanıcı Seçin",
            type:6,
        },
    ],
    run: async (client, interaction) => {
        const veri = interaction.options.getMember('user') 

          const embed = new MessageEmbed()
          .setFooter({text:`${interaction.member.user.tag} tarafından istendi`,iconURL:interaction.member.user.avatarURL({dynamic:true})})
          .setAuthor({name:`${interaction.member} kullanıcısı ${veri} kullanıcısını öpüyor`})
          .setImage(`https://media.tenor.com/22w_5_1Iee8AAAPo/monkey-lick.mp4`);
            interaction.reply({embeds:[embed]});
        
    }
}