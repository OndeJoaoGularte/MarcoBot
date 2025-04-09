const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Conheça a Playlist do Marco!"),

    async execute(interaction) {
        await interaction.reply("yo amo esta playlist, escúchala, manito! 🎶 \n https://open.spotify.com/playlist/4kgxWW9NY3XMkNXVy0D0TT?si=dd1a0b7bf6fb40d3")
    }
}