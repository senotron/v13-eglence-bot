const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "kiss",
  description: "Kiss another user",
  options: [
    {
      name: "user",
      description: "Select a user to kiss",
      type: 6,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const userToKiss = interaction.options.getMember("user");

    const embed = new MessageEmbed()
      .setFooter({
        text: `${interaction.member.user.tag} requested this`,
        iconURL: interaction.member.user.avatarURL({ dynamic: true }),
      })
      .setDescription(`${interaction.member} is kissing ${userToKiss} 💋`)
      .setImage("https://media.tenor.com/22w_5_1Iee8AAAAC/monkey-lick.gif")
      .setColor("RANDOM");

    interaction.reply({ embeds: [embed] });
  },
};
