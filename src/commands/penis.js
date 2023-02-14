const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('penis')
		.setDescription('Tag Bite for everyone'),
	async execute(interaction) {
		await interaction.reply(
			'<@&631532887035871252> <@&662698723478077440> <@&636247545915637762> C\'est ici qu\'on aime la bite !',
		);
	},
};
