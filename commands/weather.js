const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "weather",
  description: "Shows the weather information of the entered location.",
  type: 1,
  options: [
    {
      name: "location",
      description: "Enter the location!",
      type: 3,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const location = interaction.options.getString("location");

    let api = `http://wttr.in/${location}?format=%C+%t&lang=en`;

    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`${location} Weather`)
      .setDescription(`Weather Info: ${api}`)
      .setImage(`http://wttr.in/${location}?format=%C+%t&lang=en.png`)
      .setFooter("Odunchu & DESN | Senan Shukurzade");

    interaction.reply({ embeds: [embed] });
  },
};
