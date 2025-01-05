const { MessageEmbed, Client, CommandInteraction } = require("discord.js");

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
];

module.exports = {
  name: "atasözleri",
  description: "Random Turkish Proverbs",
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    const user = interaction.member.user;
    const atasöz = atasözleri[Math.floor(Math.random() * atasözleri.length)];

    const embed = new MessageEmbed()
      .setTitle(`${user.username}, Here's a Turkish Proverb for You!`)
      .setDescription(`**"${atasöz}"**`)
      .setColor("RANDOM")
      .setFooter("LetCode | MrSn")
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
    });
  },
};
