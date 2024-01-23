const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pasteque')
    .setDescription("Don't throw up !"),
  async execute(interaction) {
    await interaction.reply('https://tenor.com/kxSobPVJwwv.gif');
  },
};
