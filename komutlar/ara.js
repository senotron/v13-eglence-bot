const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "not",
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
    


    const SubCmd = interaction.options.getSubcommand();
    const member = interaction.member;
   const guild = interaction.guild;



        

        const not2 = interaction.options.getString("not");
        
        await klm.updateOne({MemberId:member.id},{$push:{bKlm:not2}},{upsert:true});
        //Seçenek kısmı
       const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("infoselectmenu") 
        .setPlaceholder('Not Listen')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
          
          {
            label:"Not Listen(Gizli)" ,
            description:"",
            value:"psychopath",
            emoji:"<:not:1046376931542700083>" 
          },
                    {
            label:"Not Listen(Herkese açık)" ,
            description:"",
            value:"psychopath2",
            emoji:"<:not:1046376931542700083>" 
          },
          ])
        )
        await interaction.reply({content: `\`${not2}\` notu, not listene eklendi<:not:1046376931542700083>`, components: [row],ephemeral: true})
        client.on("interactionCreate", async interaction => {
          if (!interaction.isSelectMenu()) return;
          if(interaction.customId === "infoselectmenu") {
             
   
     if(interaction.values[0] === "psychopath") { //https://psychopath-techonology.ml/
      const embed = new MessageEmbed()
      const d = await klm.findOne({MemberId:member.id})

     const kelimeler = d.bKlm.join("\n")

      await interaction.reply({embeds:[
          {
            title:`Not Listen<:not:1046376931542700083>`,
            description:`${kelimeler}`
          }
        ],ephemeral: true});
    } 
           else if(interaction.values[0] === "psychopath2") { //https://psychopath-techonology.ml/
      const embed = new MessageEmbed()
      const d = await klm.findOne({MemberId:member.id})
     const kelimeler = d.bKlm.join("\n")

      await interaction.reply({embeds:[
          {
            title:`Not Listen<:not:1046376931542700083>`,
            description:`${kelimeler}`
          }
        ],ephemeral: false});
    } 
          }  }) 
        //https://psychopath-techonology.ml/
        
        
        

    
       }

  
};