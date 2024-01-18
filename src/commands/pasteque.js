const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pasteque')
    .setDescription("Don't throw up !"),
  async execute(interaction) {
    const attachement = new AttachmentBuilder('./img/pasteque.gif', {
      name: 'pasteque.gif',
    });
    await interaction.reply({ files: [attachement] });
  },
};
