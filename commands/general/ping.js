const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Apresentação do marCo!"),

    async execute(interaction) {
        await interaction.reply("yo soy marCo y me encanta el Horário de Verão! 😎")
    }
}