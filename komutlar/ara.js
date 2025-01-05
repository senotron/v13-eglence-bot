const { Permissions, Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "call",
  description: "Call the number you choose",
  type: 1,
  options: [],
  run: async (client, interaction) => {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("call")
        .setPlaceholder("Select a number")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
          {
            label: "155",
            description: "Call the police",
            value: "155",
            emoji: "👨🏻‍✈️",
          },
          {
            label: "112",
            description: "Call an ambulance",
            value: "112",
            emoji: "🚑",
          },
        ])
    );

    await interaction.reply({ content: `Select the number you want to call`, components: [row] });

    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isSelectMenu()) return;

      if (interaction.customId === "call") {
        if (interaction.values[0] === "911") {
          const embed = new MessageEmbed()
            .setDescription(`${interaction.member} **The police are coming!** 👮🏽‍♂️`)
            .setColor("BLACK")
            .setFooter(`${interaction.member.user.username} requested this.`)
            .setImage(`https://www.hareketligifler.net/data/media/1449/polis-arabasi-hareketli-resim-0008.gif`);
          interaction.reply({ embeds: [embed] });
        } else if (interaction.values[0] === "112") {
          const embed = new MessageEmbed()
            .setDescription(`${interaction.member} **The ambulance is coming!** 🚑`)
            .setColor("BLACK")
            .setFooter(`${interaction.member.user.username} requested this.`)
            .setImage(`https://www.hareketligifler.net/data/media/937/ambulans-hareketli-resim-0016.gif`);
          interaction.reply({ embeds: [embed] });
        }
      }
    });
  },
};
