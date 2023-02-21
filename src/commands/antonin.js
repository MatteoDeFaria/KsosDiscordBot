const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('antonin').setDescription('Be careful with your fingers'),
  async execute(interaction) {
    const attachement = new AttachmentBuilder('https://p0.storage.canalblog.com/08/12/394568/35152157.jpg', { name: 'antonin.jpg' });
    await interaction.reply({ files: [attachement] });
  },
};
