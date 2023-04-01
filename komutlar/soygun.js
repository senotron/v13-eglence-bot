const { MessageEmbed, Client, CommandInteraction,MessageButton,MessageActionRow } = require("discord.js");

const msg = [
   "52 ABD Doları Soydun",
  "31 ABD Doları Soydun",
  "tüh bee polis geldi kaç",
  "6 BAD Doları  Soydun",
  "436 ABD Doları  Soydun",
  "643 ABD Doları  Soydun",
  "531 ABD Doları Soydun!",
  "213 ABD Doları Soydun",
  "2.234 ABD Doları Soydun",
  "3.456 ABD Doları Soydun",
  "2.765 ABD Doları Soydun",
  "9.324 ABD Doları Soydun",
  "24.768 ABD Doları Soydun",
  "31.234 ABD Doları Soydun",
  "234.876 ABD Doları Soydun",
  "453.345 ABD Doları Soydun",
  "654.865 ABD Doları Soydun",
  "tüh bee polis geldi kaç",
  "734.763 ABD Doları Soydun",
  "931.573 ABD Doları Soydun",
  "311.645 ABD Doları Soydun",
  "Büyük vurgun yaptın toplam 1.000.0000 ABD Doları wwOOOOww",
]
module.exports = {
  name: "soygun",
  description: "Banka soyarsınr",
  options: [],
 
  run: async (client, interaction) => {
    const user = interaction.member.user
        const Embed = new MessageEmbed();



    const para = msg[Math.floor(Math.random() * msg.length)]

    const workEmbed = new MessageEmbed()
        .setTitle(`**\ ${para} \** `)
        .setColor("RANDOM")

    interaction.reply({embeds: [workEmbed]});
 
  }, 
};

  







//LetCode MrSn

//LetCode MrSn

//LetCode MrSn