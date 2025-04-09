const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("falar")
        .setDescription("Apresentação do Marco!"),

    async execute(interaction) {
        await interaction.reply("yo soy Marco y me encanta el Horário de Verão! 😎")
    }
}