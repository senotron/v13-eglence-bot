const { Client,  MessageEmbed, Permissions} = require("discord.js");
const film = require("film-apisi");

module.exports = {
  name: "steam-oyun-ara",
  description: "Oyun ararsın",
  type: 1,
  options: [
  
    {
        name:"oyun",
        description:"Oyun ismini girin!",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
    const oyun = interaction.options.getString('oyun')
  let film = film.ara(oyun);

      const embed = new MessageEmbed()
        .setAuthor("Steam Store")
        .setColor("BLACK")
        .setTitle(film.ismi)

   interaction.reply({embeds: [embed]})     

      
  
 
  }

};