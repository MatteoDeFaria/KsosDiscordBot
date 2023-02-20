const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('term')
    .setDescription('It\'s time to get salty'),
  async execute(interaction) {
    await interaction.reply('https://gph.is/2jAtlPQ');
  },
};
