const { Client, MessageEmbed, Permissions } = require("discord.js");
var request = require("request");

module.exports = {
  name: "tweet",
  description: "Send a fake tweet in your name.",
  type: 1,
  options: [
    {
      name: "text",
      description: "Write the text you want to include in your tweet",
      type: 3,
      required: true,
    },
  ],

  run: async (client, interaction) => {
    const text = interaction.options.getString("text");

    await interaction.deferReply();

    request(
      `https://nekobot.xyz/api/imagegen?type=tweet&text=${encodeURI(
        text
      )}&username=${encodeURI(interaction.member.user.username)}&image=${encodeURI(
        interaction.member.user.avatarURL()
      )}`,
      function (error, response, body) {
        if (error || !body || !JSON.parse(body).success)
          return interaction.editReply({
            embeds: [
              {
                color: client.settings.embedColors.red,
                title: "**»** An Error Occurred!",
                description: `**•** I don't know the cause of the error.`,
              },
            ],
          });

        interaction.editReply({
          embeds: [
            {
              author: {
                name: `${interaction.user.username} • Tweet`,
              },
              image: {
                url: JSON.parse(body).message,
              },
            },
          ],
        });
      }
    );
  },
};
