const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "fortune-teller",
    description: "Get your fortune told by the bot!",
    run: async (client, interaction) => {
        const fortunes = [
            "You will have an unexpected fortune soon! 💎",
            "A big change is coming your way. Embrace it! 🔮",
            "You will meet someone who will change your life. 🌟",
            "The stars are aligned for you today! ✨",
            "Beware of surprises, they may not all be good! ⚡",
            "A challenge is ahead, but you will conquer it! 🏆",
            "Today is your lucky day! 🌈",
            "A new opportunity is on the horizon, take it! 🚀",
            "Someone close to you will surprise you soon. 🎁",
            "You will make a decision that will change your future. 💡",
            "Don’t worry, the storm will pass and sunshine will follow. 🌤️",
            "An old friend will reappear in your life. 👋",
            "Now is the perfect time to start something new. 🌱",
            "Trust your instincts, they will guide you well. 🧭",
            "You will find peace in the most unexpected places. 🕊️",
            "Your hard work will soon pay off, stay patient. ⏳",
            "A great adventure is waiting for you. 🌍",
            "You’ll soon be receiving good news. 📬",
            "An exciting change in your career is coming soon. 📈",
            "You’ll soon be surrounded by positivity and love. 💖"
        ];

        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("🔮 Fortune Teller")
            .setDescription(`${interaction.member}, here is your fortune:`)
            .addField("Your Fortune", randomFortune)
            .setImage("https://media.giphy.com/media/xUOxf3g96kaY0T3PS8/giphy.gif")
            .setFooter(`Fortune told by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("get_fortune")
                .setLabel("Tell Me Another Fortune")
                .setStyle("SECONDARY")
        );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });

        const filter = (buttonInteraction) => buttonInteraction.customId === "get_fortune" && buttonInteraction.user.id === interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async (buttonInteraction) => {
            const newFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            const newEmbed = new MessageEmbed()
                .setColor("PURPLE")
                .setTitle("🔮 Fortune Teller")
                .setDescription(`${interaction.member}, here is your new fortune:`)
                .addField("Your Fortune", newFortune)
                .setImage("https://media.giphy.com/media/xUOxf3g96kaY0T3PS8/giphy.gif")
                .setFooter(`Fortune told by ${interaction.member.user.username}`, interaction.member.user.avatarURL());

            await buttonInteraction.update({ embeds: [newEmbed] });
        });

        collector.on('end', () => {
            row.components[0].setDisabled(true);
            interaction.editReply({ components: [row] });
        });
    }
};
