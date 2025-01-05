const { MessageEmbed, MessageActionRow, MessageButton, Client, CommandInteraction } = require("discord.js");

module.exports = {
  name: "time-travel",
  description: "Travel to the past or future and get a fun fact!",
  options: [
    {
      name: "destination",
      description: "Where do you want to go?",
      type: 3,
      required: true,
      choices: [
        {
          name: "Past",
          value: "past",
        },
        {
          name: "Future",
          value: "future",
        },
      ],
    },
  ],

  run: async (client, interaction) => {
    const destination = interaction.options.getString("destination");

    const pastFacts = [
      "In 1969, humans landed on the Moon for the first time.",
      "The first iPhone was released in 2007.",
      "The Berlin Wall fell in 1989, marking the end of the Cold War.",
      "In 1912, the Titanic sank on its maiden voyage.",
      "The first computer was built in the 1940s.",
      "The first World War began in 1914.",
      "Albert Einstein published his Theory of Relativity in 1905.",
      "The first flight by the Wright brothers was in 1903.",
      "The first television broadcast was in 1927.",
      "The Great Depression started in 1929.",
      "World War II ended in 1945.",
      "The Cold War started in 1947.",
      "In 1963, Martin Luther King Jr. delivered his 'I Have a Dream' speech.",
      "The first manned mission to the Moon was Apollo 11 in 1969.",
      "In 1977, the first Star Wars movie was released.",
      "The first email was sent in 1971.",
      "The Berlin Wall fell in 1989, reuniting East and West Germany.",
      "The first computer virus was created in 1983.",
      "The first website went online in 1991.",
      "The first MP3 file was created in 1995.",
    ];

    const futurePredictions = [
      "In the future, flying cars may be a reality.",
      "We might live on Mars within the next 100 years.",
      "AI could surpass human intelligence within the next decade.",
      "Robots may become part of our everyday lives.",
      "In the future, we could be living in virtual reality worlds.",
      "Quantum computing could revolutionize technology.",
      "Self-driving cars will be common on the roads in the next few years.",
      "Holograms might replace traditional screens in the future.",
      "We might discover alien life forms within the next 50 years.",
      "Medical advancements could allow humans to live much longer lives.",
      "The Internet of Things will connect everything to the internet.",
      "AI-powered assistants will be more intelligent than humans.",
      "Space tourism will become more affordable in the future.",
      "We may find a cure for cancer in the next few decades.",
      "3D printing could revolutionize manufacturing and medicine.",
      "Electric cars could replace gasoline-powered ones entirely.",
      "There could be a shift towards renewable energy as the primary energy source.",
      "Genetic engineering might allow us to eliminate diseases before birth.",
      "The human race might colonize other planets within the next 200 years.",
      "We may develop a sustainable way to reverse climate change.",
    ];

    let fact = "";

    if (destination === "past") {
      fact = pastFacts[Math.floor(Math.random() * pastFacts.length)];
    } else if (destination === "future") {
      fact = futurePredictions[Math.floor(Math.random() * futurePredictions.length)];
    }

    const embed = new MessageEmbed()
      .setTitle(`Time Travel: Destination - ${destination.charAt(0).toUpperCase() + destination.slice(1)}`)
      .setDescription(`You have traveled to the ${destination}. Here's a fact for you:`)
      .addField("Fact:", `"${fact}"`)
      .setColor("RANDOM")
      .setFooter("The future is now, and the past is waiting to be discovered!");

    const travelAgainButton = new MessageButton()
      .setCustomId('travel_again')
      .setLabel('Travel Again')
      .setStyle('PRIMARY');

    const row = new MessageActionRow().addComponents(travelAgainButton);

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });

    // Wait for the user to click the button (interaction)
    const filter = (i) => i.customId === 'travel_again' && i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 15000,
    });

    collector.on('collect', async (i) => {
      await i.deferUpdate();
      // Delay for dramatic effect
      setTimeout(() => {
        const newDestination = Math.random() > 0.5 ? "past" : "future";
        const newFact = newDestination === "past"
          ? pastFacts[Math.floor(Math.random() * pastFacts.length)]
          : futurePredictions[Math.floor(Math.random() * futurePredictions.length)];

        const newEmbed = new MessageEmbed()
          .setTitle(`Time Travel: Destination - ${newDestination.charAt(0).toUpperCase() + newDestination.slice(1)}`)
          .setDescription(`You have traveled to the ${newDestination} again. Here's a new fact for you:`)
          .addField("Fact:", `"${newFact}"`)
          .setColor("RANDOM")
          .setFooter("The future is now, and the past is waiting to be discovered!");

        i.editReply({
          embeds: [newEmbed],
          components: [row],
        });
      }, 2000); // Delay before sending new fact
    });

    collector.on('end', (collected, reason) => {
      if (reason === 'time') {
        interaction.editReply({
          content: "Time's up! You couldn't travel again. Let me know if you want to try again!",
          components: [],
        });
      }
    });
  },
};
