const { Client,  MessageEmbed, Permissions} = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();

module.exports = {
  name: "steam-oyun-ara",
  description: "Oyun ararsın",
  type: 1,
  options: [
  
    {
        name:"oyun",
        description:"Oyun ismini girin!",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
    const oyun = interaction.options.getString('oyun')
      let steampng =
    "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png";
provider.search(oyun).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
      console.log(results);
      const embed = new MessageEmbed()
        .setAuthor("Steam Store", steampng)
        .setColor("BLACK")
        .setTitle(result[0].name)
        .addField(`<a:black_tik:815280959397691422> Oyunun ID 'sı`, result[0].id)
        .setThumbnail(results.otherData.imageUrl)
        .addField("💱 Türleri", results.genres)
        .addField(
          "💲 Fiyati",
          `Normal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`,
          true
        )
        .addField(
          "🔷 Platformlar",
          results.otherData.platforms,
          true
        )
        .addField("👍 Metacritic Puanı", results.otherData.metacriticScore, true)
        .addField("🔴 Etiketleri", results.otherData.features, true)
        .addField("🎵 Geliştiricileri", results.otherData.developer, true)
        .addField("🔒 Yayımcıları", results.otherData.publisher)
        .setColor("BLACK")
    interaction.reply({embeds: [embed]});

            });
  
    });
 
  }

};