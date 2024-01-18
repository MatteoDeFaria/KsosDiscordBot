const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('cheh').setDescription('CHEH'),
  async execute(interaction) {
    const attachement = new AttachmentBuilder('./img/cheh.jpg', {
      name: 'cheh.jpg',
    });
    await interaction.reply({ files: [attachement] });
  },
};
