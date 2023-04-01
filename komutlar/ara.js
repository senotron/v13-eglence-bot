const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "ara",
  description: "Not yazarsın",
  type:1,
  options: [
    
  ],
  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @returns 
   */
  run: async (client, interaction) => {
    


    const member = interaction.member;
   const guild = interaction.guild;



              
        //Seçenek kısmı
       const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("ara") 
        .setPlaceholder('Numaralar')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
          
          {
            label:"155" ,
            description:"Polisi ararsın",
            value:"155",
            emoji:"👨🏻‍✈️" 
          },
                    {
            label:"112" ,
            description:"Ambulans ara",
            value:"112",
            emoji:"<:not:1046376931542700083>" 
          },
          ])
        )
        await interaction.reply({content: `Aramak istediğin numarauyı seç`, components: [row]})
        client.on("interactionCreate", async interaction => {
          if (!interaction.isSelectMenu()) return;
          if(interaction.customId === "ara") {
             
   
     if(interaction.values[0] === "155") { 
      const embed = new MessageEmbed()
.setDescription(`${interaction.member.username} **Polis Geliyor** 👮🏽‍♂️`)
      .setColor("BLACK")
      .setFooter(
        `${interaction.member.username} tarafından istendi.`
      )
      .setImage(
        `https://www.hareketligifler.net/data/media/1449/polis-arabasi-hareketli-resim-0008.gif`
      );
   interaction.reply({embeds: [embed]})
    } 
           else if(interaction.values[0] === "psychopath2") { 
      const embed = new MessageEmbed()
     
    } 
          
          
          
          
          
          }}) 
    
        
        
        

    
       }

  
};