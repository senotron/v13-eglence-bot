const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "sureler",
  description: "Kuran Surelerini okuya bilirsin",
    options:[
        {
            name:"sure",
            description:"Sure seç",
            type:3,
            required:true,
            choices:[
                {
                 name:"Fatiha",
                 value:"fatiha"
                },
                {
                 name:"Bakara",
                 value:"bakara"
                },
                              {
                 name:"Âl-i İmrân",
                 value:"imran"
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

        const secim = options.get("sure").value;

        const Embed = new MessageEmbed();
    const member = interaction.member;
   const guild = interaction.guild;
        switch(secim){

      case "fatiha":{ 
        
     const embed = new MessageEmbed()
                      .setAuthor({name:interaction.member.user.tag,iconURL:interaction.member.user.avatarURL({dynamic:true})})
                      .setDescription(`<@!${id}> isimli kullanıcının yasağı kaldırıldı`)
                      .setColor("GREEN");
                      interaction.reply({embeds:[embed]});
                
            }
        interaction.reply({embeds:[embed]});

                        break;
        }
            case "cikar":


            
                break;
                       

        }
      
        }

};

