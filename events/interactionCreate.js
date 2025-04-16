const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const customIdToCommand = {
			"select-docs": "docs",
			"select-languagefw": "frameworks",
			"select-framework": "frameworks",
			"select-languagelib": "bibliotecas",
			"select-library": "bibliotecas",
			"select-front": "front"
		};

		if (interaction.isStringSelectMenu()) {
			const commandName = customIdToCommand[interaction.customId];
			if (!commandName) return;

			const command = interaction.client.commands.get(commandName);

			if (command && typeof command.handleSelect === "function") {
				try {
					await command.handleSelect(interaction);
				} catch (error) {
					console.error(error);
					await interaction.reply({
						content: '❌ Erro ao lidar com o menu de seleção.',
						flags: MessageFlags.Ephemeral
					});
				}
			}
			return;
		}

		// Trata comandos de barra normais
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			const errorReply = {
				content: '❌ There was an error while executing this command!',
				flags: MessageFlags.Ephemeral
			};
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp(errorReply);
			} else {
				await interaction.reply(errorReply);
			}
		}
	},
};
