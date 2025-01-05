const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fortune",
  description: "Ask a question and receive a fortune or prophecy",
  options: [
    {
      name: "question",
      description: "Ask your burning question",
      type: 3,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const question = interaction.options.getString("question");

    // Fortune responses
    const fortunes = [
      "The stars align in your favor, something magical is coming your way!",
      "Be cautious, your destiny holds a twist, but you’ll overcome it.",
      "The answer lies within you, listen to your heart, not the world.",
      "An unexpected adventure is on the horizon, ready yourself!",
      "You will find the answer you seek soon, but not yet. Patience is key.",
      "Do not seek answers from others; your fate is written in the stars.",
      "Beware of the shadows, they whisper of challenges ahead.",
      "Great things await you, but remember, the journey is as important as the destination.",
      "Your energy is unmatched, and the universe is conspiring to help you.",
      "Trust the process, even when it seems unclear, it will make sense soon."
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    const embed = new MessageEmbed()
      .setTitle("🔮 Your Fortune Awaits 🔮")
      .setDescription(`**Question**: *${question}*\n\n**Fortune**: *${randomFortune}*`)
      .setColor("PURPLE")
      .setFooter({
        text: `Your fortune was read by ${interaction.member.user.username}`,
        iconURL: interaction.member.user.avatarURL({ dynamic: true }),
      })
      .setTimestamp();

    interaction.reply({ embeds: [embed] });
  },
};
