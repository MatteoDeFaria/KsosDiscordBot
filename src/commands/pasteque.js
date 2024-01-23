const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pasteque')
    .setDescription("Don't throw up !"),
  async execute(interaction) {
    await interaction.reply(
      'https://tenor.com/fr/view/pastèque-gif-8714003011562283193',
    );
  },
};
