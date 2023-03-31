const { Permissions,Client,CommandInteraction,MessageEmbed,MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
module.exports = {
  name: "sureler",
  description: "Kuran Surelerini okuya bilirsin",
  type:'CHAT_INPUT',
    category:"not",
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
                 value:"fatiha"
                },
                              {
                 name:"Fatiha",
                 value:"fatiha"
                },
                              {
                 name:"Fatiha",
                 value:"fatiha"
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

        const secim = options.get("mesaj-növ").value;

        const Embed = new MessageEmbed();
    const member = interaction.member;
   const guild = interaction.guild;
        switch(secim){

      case "ekle":{ 
        
  let {not} = await model.findOne({GuildID:guild.id});
                if(!not) return interaction.reply({content: `Not Sistemi Bu Sunucuda Aktif Değil.`, ephemeral: true});   
        const d = await klm.findOne({MemberId:member.id});
        if(!d) return interaction.reply({content: `Sistemde hiç notun yok`, ephemeral: true});
        if(d.bKlm.length <= 0) return interaction.reply({content: `Sistemde hiç notun yok`, ephemeral: true});
        const kelimeler = d.bKlm.join("\n");
        interaction.reply({embeds:[
                        Embed.setTitle("Not Listen<:not:1046376931542700083>")
                        .setDescription(`${kelimeler}`) 
                    ]});
                        break;
        }
            case "cikar":


                  let {not} = await model.findOne({GuildID:guild.id});
                if(!not) return interaction.reply({content: `Not Sistemi Bu Sunucuda Aktif Değil.`, ephemeral: true});   
        const d = await klm.findOne({MemberId:member.id});
        if(!d) return interaction.reply({content: `Sistemde hiç notun yok`, ephemeral: true});
        if(d.bKlm.length <= 0) return interaction.reply({content: `Sistemde hiç notun yok`, ephemeral: true});
        const kelimeler2 = d.bKlm.join("\n");
        interaction.reply({embeds:[
                        Embed.setTitle("Not Listen<:not:1046376931542700083>")
                        .setDescription(`${kelimeler2}`)
                    ],ephemeral: true});
                break;
                       

        }
      
        }

};

