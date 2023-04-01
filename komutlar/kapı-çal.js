const { Client,  MessageEmbed, Permissions} = require("discord.js");
var request = require("request");

module.exports = {
  name: "kapı-çal",
  description: "Polat kapı çalar.",
  type: 1,
  options: [
  
   
    
],

  run: async(client, interaction) => {






const embed = new MessageEmbed()
.setDescription(`${interaction.member} • Tak tak tak`)
      .setColor("BLACK")
      .setFooter(
        `${interaction.member.user.username} tarafından istendi.`
      )
      .setImage(
        `https://media.tenor.com/5GqMvK7QrzgAAAAC/tak-tak-polat-alemdar.gif`
      );
   interaction.reply({embeds: [embed]})
    

    

  }
};





//LetCode MrSn