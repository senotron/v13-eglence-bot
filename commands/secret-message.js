const { MessageEmbed, Client, CommandInteraction } = require("discord.js");

module.exports = {
  name: "secret-message",
  description: "Send a secret message that will be revealed after a certain time!",
  options: [
    {
      name: "message",
      description: "The secret message to be sent.",
      type: 3,
      required: true,
    },
    {
      name: "time",
      description: "Time in seconds after which the secret message will be revealed. (1 min = 60, 1 hour = 3600)",
      type: 4,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const secretMessage = interaction.options.getString("message");
    const time = interaction.options.getInteger("time");

    // Provide guidance on the time format
    if (time <= 0) {
      return interaction.reply({
        content: "⛔ Please provide a time greater than 0 seconds.",
        ephemeral: true,
      });
    }

    const embed = new MessageEmbed()
      .setTitle("Secret Message Created!")
      .setDescription(
        `Your secret message has been created. It will be revealed in ${time} seconds.`
      )
      .setColor("BLUE")
      .setFooter("This is a secret message! 🔒");

    interaction.reply({ embeds: [embed] });

    setTimeout(() => {
      const revealEmbed = new MessageEmbed()
        .setTitle("Your Secret Message is Revealed! 🔓")
        .setDescription(secretMessage)
        .setColor("GREEN");

      interaction.followUp({ embeds: [revealEmbed] });
    }, time * 1000);
  },
};
