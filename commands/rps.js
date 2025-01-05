const { Permissions, Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "rps",
  description: "Play Rock, Paper, Scissors",
  options: [
    {
      name: "selection",
      description: "Choose one",
      type: 3,
      required: true,
      choices: [
        {
          name: "Rock",
          value: "rock",
        },
        {
          name: "Paper",
          value: "paper",
        },
        {
          name: "Scissors",
          value: "scissors",
        },
      ],
    },
  ],

  run: async (client, interaction) => {
    const { options } = interaction;
    const userChoice = options.get("selection").value;

    const botChoices = ["rock", "paper", "scissors"];
    const botChoice = botChoices[Math.floor(Math.random() * botChoices.length)];

    const resultMessages = {
      rock: {
        rock: "It's a tie! Both chose Rock.",
        paper: "You lost! Paper beats Rock.",
        scissors: "You win! Rock beats Scissors.",
      },
      paper: {
        rock: "You win! Paper beats Rock.",
        paper: "It's a tie! Both chose Paper.",
        scissors: "You lost! Scissors beats Paper.",
      },
      scissors: {
        rock: "You lost! Rock beats Scissors.",
        paper: "You win! Scissors beats Paper.",
        scissors: "It's a tie! Both chose Scissors.",
      },
    };

    const result = resultMessages[userChoice][botChoice];

    const embed = new MessageEmbed()
      .setAuthor({ name: "LetCode" })
      .setTitle(`Rock-Paper-Scissors | ${result.split(" ")[0]}!`)
      .setDescription(`**My choice** - ${capitalizeFirstLetter(botChoice)}\n**Your choice** - ${capitalizeFirstLetter(userChoice)}`)
      .setFooter("LetCode | Mrsn")
      .setColor(result.includes("win") ? "GREEN" : result.includes("lost") ? "RED" : "YELLOW");

    await interaction.reply({ embeds: [embed] });
  },
};

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
