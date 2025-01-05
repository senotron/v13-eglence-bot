const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "mystery-box",
    description: "Open a mystery box and see what surprise you get!",
    run: async (client, interaction) => {
        const rewards = [
            "You found 500 coins! 💰",
            "You received a rare item! 🌟",
            "You got a legendary pet! 🐱",
            "You unlocked a new badge! 🏅",
            "You gained 100 XP! 🎮",
            "Oops! Nothing inside this time! 😢"
        ];

        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("🎁 Mystery Box")
            .setDescription(`${interaction.member} opened the mystery box and...`)
            .addField("Surprise!", randomReward)
            .setImage("https://media.giphy.com/media/3oEjI5k0qRr8p5LxaM/giphy.gif")
            .setFooter(`Opened by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("open_box")
                .setLabel("Open Another Box")
                .setStyle("PRIMARY")
        );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });

        const filter = (buttonInteraction) => buttonInteraction.customId === "open_box" && buttonInteraction.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async (buttonInteraction) => {
            const newReward = rewards[Math.floor(Math.random() * rewards.length)];
            const newEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🎁 Mystery Box")
                .setDescription(`${interaction.member} opened the mystery box again and...`)
                .addField("Surprise!", newReward)
                .setImage("https://media.giphy.com/media/3oEjI5k0qRr8p5LxaM/giphy.gif")
                .setFooter(`Opened by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

            await buttonInteraction.update({ embeds: [newEmbed] });
        });

        collector.on('end', () => {
            row.components[0].setDisabled(true);
            interaction.editReply({ components: [row] });
        });
    }
};
