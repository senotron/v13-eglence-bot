const { MessageEmbed, Client, CommandInteraction,MessageButton,MessageActionRow } = require("discord.js");

const atasözleri = [
    "Abanın kadri yağmurda bilinir", 
    "Acele bir ağaçtır, meyvesi pişmanlık.",
    "Acele ile menzil alınmaz.",
    "İki baş bir kazanda kaynamaz.",
    "İki cambaz bir ipte oynamaz.",
    "Rüşvet kapıdan girince iman bacadan çıkar.",
    "Sakla samanı gelir zamanı.",
    "Tatlı dil yılanı deliğinden çıkarır.",
    "Vakitsiz Öten Horozun Başını Keserler.",
    "Zararın neresinden dönülse kardır."
]
module.exports = {
  name: "atasözleri",
  description: "atasözleri",
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    const user = interaction.member.user
        const Embed = new MessageEmbed();



    const atas = atasözleri[Math.floor(Math.random() * atasözleri.length)]

    const workEmbed = new MessageEmbed()
        .setDescription(`**\ ${atas} \** `)
        .setColor("RANDOM")

    interaction.reply({
      embeds: [workEmbed]
      
    });

    

  }, 
};


//LetCode MrSn

//LetCode MrSn

//LetCode MrSn