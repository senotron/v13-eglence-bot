const { Permissions, Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

const loveRates = [
    "10%- You won't even be friends",
    "20%- The biggest loves start with a fight",
    "30%- Maybe in the future",
    "40%- You can try!",
    "70%- It's acceptable",
    "80%- Lovers",
    "100%- In love"
];

module.exports = {
  name: "love-check",
  description: 'Love meter with a twist',
  options: [
      {
          name: "member", 
          description: "Select a member", 
          type: 6, 
          required: true 
      }
  ],
  
  run: async (client, interaction) => { 
    const member = interaction.options.getMember("member");
    const user = interaction.member;
    const result = loveRates[Math.floor(Math.random() * loveRates.length)];

    const loveGifUrls = {
      "10": "https://media.tenor.com/0pMICRoCOoAAAAPo/fire-heart.mp4", 
      "100": "https://media.tenor.com/M4-GW7jYQ9EAAAAM/love-heart.gif",
      "50": "https://media.tenor.com/YJ1pQIVmrukAAAAM/love-heart-beat.gif"
    };

    // Select GIF based on the result
    let gifUrl = loveGifUrls[result.split("-")[0]] || "https://media.tenor.com/H3Ht5c7pTiIAAAAM/love.gif";

    const embed = new MessageEmbed()
      .setAuthor(user.user.username, user.user.avatarURL())
      .setTitle(`**${result}** 💞`)
      .setDescription(`${user} has checked their love percentage with ${member}.`)
      .setThumbnail(gifUrl)
      .addFields(
        { name: '💌 Relationship Status:', value: result, inline: true },
        { name: '🧑‍🤝‍🧑 With:', value: `${member.user.username}`, inline: true },
      )
      .setFooter("LetCode | Mrsn")
      .setColor("GREEN");

    await interaction.reply({embeds: [embed]});
  },
};
