const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "tkm",
  description: "Taş,kağıt ve makas oynarsın",
    options:[
        {
            name:"seçim",
            description:"Birini seç",
            type:3,
            required:true,
            choices:[
                {
                 name:"Taş",
                 value:"taş"
                },
                {
                 name:"Kağıt",
                 value:"kağıt"
                },
                              {
                 name:"Makas",
                 value:"makas"
                }
            ],
        },

    ],

  /**
   * 
   * @param {Client} client 
   * @param {CommandInteraction} interaction 
   * @returns 
   */
  run: async (client, interaction) => {
        const {guildId,options,channel} = interaction;

        const secim = options.get("seçim").value;

        const Embed = new MessageEmbed();
    const member = interaction.member;
   const guild = interaction.guild;
        switch(secim){

      case "taş":{ 
        
     const embed1 = new MessageEmbed()
     .setAuthor({name:"LetCode"})
     .setTitle(`Taş-Kağıt-Makas | Kaybettin`)
     .setDescription(`**Benim seçimim**-Kağıt \r\n **Senin seçimin**-Taş`)
     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embed1]});
 break;
        }
          
            
      case "kağıt":
                const embed2 = new MessageEmbed()
 
     .setAuthor({name:"LetCode"})
     .setTitle(`Taş-Kağıt-Makas | Kaybettin`)
     .setDescription(`**Benim seçimim**-Makas \r\n **Senin seçimin**-Kağıt`)          
     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embed2]});
                    
  case "makas":
     const embed3 = new MessageEmbed()
     .setAuthor({name:"LetCode"})
     .setTitle(`Taş-Kağıt-Makas | Kaybettin`)
    .setDescription(`**Benim seçimim**-Taş \r\n **Senin seçimin**-Makas`)         
     .setFooter(`LetCode | Mrsn`)
     .setColor("GREEN");
     interaction.reply({embeds:[embed3]});

            
            
            
        }
 }

};













//LetCode MrSn