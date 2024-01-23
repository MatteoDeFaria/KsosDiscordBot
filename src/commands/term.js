const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('term')
    .setDescription("It's time to get salty"),
  async execute(interaction) {
    await interaction.reply(
      'https://media.giphy.com/media/9WnfCqZwkfpiU/giphy.gif',
    );
  },
};
