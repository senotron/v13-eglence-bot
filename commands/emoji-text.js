const { Client, CommandInteraction } = require("discord.js");
const sennur = require("sennur");

module.exports = {
  name: "emoji-text",
  description: "Generate text with emojis using the bot!",
  type: 1,
  options: [
    {
      name: "text",
      description: "The text the bot will generate!",
      type: 3,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const text = interaction.options.getString("text");

    if (text.length > 50)
      return interaction.reply({
        content: ":x: You can use a maximum of 50 characters.",
        ephemeral: true,
      });

    try {
      const emojiText = await sennur.toEmoji(text);
      interaction.reply(emojiText);
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: ":x: An error occurred.",
        ephemeral: true,
      });
    }
  },
};
