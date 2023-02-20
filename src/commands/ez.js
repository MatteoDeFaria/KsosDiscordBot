const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ez')
    .setDescription('Ez !'),
  async execute(interaction) {
    await interaction.reply('Ez !');
  },
};
