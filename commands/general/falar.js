const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('falar')
		.setDescription('Peça ao marCo para falar alguma coisa 🗣️')
		.addStringOption(option =>
			option.setName('mensagem')
				.setDescription('O que você quer que o marCo diga?')
				.setRequired(true)),
	async execute(interaction) {
		const mensagem = interaction.options.getString('mensagem');
		await interaction.reply(mensagem);
	},
};
