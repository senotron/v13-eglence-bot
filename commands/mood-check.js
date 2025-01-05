const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "mood-check",
    description: "Check your current mood with a random result!",
    run: async (client, interaction) => {
        const moods = [
            "You're feeling amazing! Keep up the great vibes! ✨",
            "You're in a relaxed mood. Enjoy the calmness. 🧘‍♂️",
            "Today is a day for adventure! Embrace the excitement. 🌍",
            "You're feeling a bit tired. Don't forget to rest! 😴",
            "A little bit of stress is here, but you got this! 💪",
            "You're in a playful mood! Time for fun and games! 🎉",
            "Feeling inspired? Creativity is flowing through you! 🎨",
            "You're feeling optimistic! The future looks bright. 🌟",
            "You might be feeling a little down. Don't worry, things will get better. 💖",
            "You're in a thoughtful mood. Reflect and plan your next steps. 💡",
            "You're feeling generous! Spread some love today. 💌",
            "You're in a curious mood, ready to learn new things! 📚",
            "You're feeling confident! It's your time to shine. 🌟",
            "A calm mood today. It's time for self-care. 💆‍♀️",
            "You're feeling a bit adventurous! Try something new today. 🚀"
        ];

        const randomMood = moods[Math.floor(Math.random() * moods.length)];

        const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Mood Check")
            .setDescription(`Hey ${interaction.member}, here's how you're feeling today:`)
            .addField("Your Mood", randomMood)
            .setFooter(`Mood check by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("get_mood")
                .setLabel("Check Mood Again")
                .setStyle("SECONDARY")
        );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });

        const filter = (buttonInteraction) => buttonInteraction.customId === "get_mood" && buttonInteraction.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async (buttonInteraction) => {
            const newMood = moods[Math.floor(Math.random() * moods.length)];
            const newEmbed = new MessageEmbed()
                .setColor("BLUE")
                .setTitle("Mood Check")
                .setDescription(`Hey ${interaction.member}, here's your new mood:`)
                .addField("Your Mood", newMood)
                .setFooter(`Mood check by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

            await buttonInteraction.update({ embeds: [newEmbed] });
        });

        collector.on('end', () => {
            row.components[0].setDisabled(true);
            interaction.editReply({ components: [row] });
        });
    }
};
