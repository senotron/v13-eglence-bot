const { MessageEmbed, Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

const heists = [
    "You just pulled off a *heist* worth **$10,000**! 🎉 Watch out for the police though... 🚨",
    "Infiltrated a high-security vault, stole **$5,000**! But there’s a twist, the bank just triggered an alarm! 🔴",
    "You’ve hacked the system and transferred **$1,200,000** into your account! 🖥️💰 Now lay low!",
    "Caught the *perfect* moment, and you just pocketed **$45,000**! 💵 The getaway car's waiting! 🚗💨",
    "A daring daylight heist! You made off with **$200,000**! 🌞💸 The city will be buzzing soon! 🏙️",
    "In and out! **$50,000** in cash in your pockets. Time to disappear. 👀💼",
    "Your plan worked flawlessly! A cool **$12,000** stolen without a trace. 👑💵",
    "A big one! You’ve secured **$2,000,000** worth of diamonds! 💎 Time to vanish into the night 🌙.",
    "You went all in! **$1,500,000** is now yours. But watch out, the heist’s gone viral! 📹🚨",
    "Made a clean getaway with **$78,000**. You’re now a *ghost* in the system. 🕶️💰",
    "A heist of *legendary* proportions! You stole **$500,000** and left no trace. 🏆💵 The world won’t forget this one.",
    "You were too fast! You just pocketed **$350,000**, and now you’re the most wanted in town! 💼💸",
    "You cracked the code and took home **$100,000**. Time for a vacation! 🌴✈️",
    "A dangerous game, but you won! **$3,000,000** is now in your hands. Run before it’s too late! 💸⏳",
    "The vault was *unguarded*, and you stole **$60,000**. Easy money, or was it too easy? 💵💼",
    "The bank security never saw it coming, and neither did you! **$90,000** gone in seconds. 🏃💨💰",
    "A world-class heist: **$15,000,000** worth of cash and gold. But will you escape the law? ⚖️💎",
    "A silent, stealthy operation! You secured **$200,000** in no time, and no one even noticed. 💼🕵️‍♂️",
    "A dangerous *double-cross*! You tricked the system and got away with **$4,000,000**. 😈💵",
    "A one-of-a-kind heist! **$7,000,000** in cash, but the police are on their way... 🏃🚓💸",
    "A risky but *successful* operation: **$500,000** in stolen goods. Just make sure to lay low for a while. 🕶️💼",
    "You pulled off the *perfect* robbery: **$1,000,000** in cash, and not a single clue left behind. 🔍💵"
];

module.exports = {
  name: "heist",
  description: "You pull off a creative heist",
  options: [],

  run: async (client, interaction) => {
    const user = interaction.member.user;
    const Embed = new MessageEmbed();

    const heistMessage = heists[Math.floor(Math.random() * heists.length)];

    const heistEmbed = new MessageEmbed()
      .setTitle(`💥 **Heist Complete!** 💥`)
      .setDescription(`${heistMessage}`)
      .setColor("RANDOM")
      .setFooter(`Heist performed by ${user.username}`)
      .setTimestamp();

    interaction.reply({ embeds: [heistEmbed] });
  },
};
