const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

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
     const embedmrsn = new MessageEmbed()
     .setAuthor("LetCode",interaction.member.user.avatarURL(),member.avatarURL())
     .setTitle(`Aşk Ölçer💞`)
     .setDescription(``)

     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embedmrsn]});


},
};