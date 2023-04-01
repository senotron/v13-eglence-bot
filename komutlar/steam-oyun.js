const { Client,  MessageEmbed, Permissions} = require("discord.js");

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
    const oyun = interaction.options.getString('metin')
   
      const embed = new MessageEmbed()
        .setAuthor("Steam Store")
        .setColor("BLACK")
        .setTitle(films.ismi)

   interaction.reply({embeds: [embed]})     

      
  
 
  }

};