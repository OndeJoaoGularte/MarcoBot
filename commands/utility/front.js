const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, MessageFlags } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("front")
        .setDescription("Consulte as principais tecnologias para o front-end"),

    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("select-front")
                .setPlaceholder("Selecione uma tecnologia front-end")
                .addOptions(
                    { label: "HTML5", description: "Veja as tecnologias de HTML", value: "html" },
                    { label: "CSS3", description: "Veja as tecnologias de CSS", value: "css" },
                    { label: "JavaScript", description: "Veja uma explicação sobre JavaScript", value: "javascript" }
                )
        );

        await interaction.reply({
            content: "Selecione a tecnologia front-end para visualizar mais informações:",
            components: [row],
            flags: MessageFlags.Ephemeral
        });
    },

    async handleSelect(interaction) {
        const selected = interaction.values[0];

        if (selected === "javascript") {
            const embed = new EmbedBuilder()
                .setTitle("JavaScript")
                .setDescription("JavaScript é uma linguagem de programação usada para criar páginas web interativas. Sua principal função é adicionar dinamismo às páginas web, manipulando o conteúdo de forma eficiente, além de ser amplamente utilizado para criar aplicações web e mobile.")
                .setColor('Orange');

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setLabel("React")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://react.dev/")
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Vue.js")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://vuejs.org/")
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Angular")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://angular.io/")
            );

            await interaction.reply({
                embeds: [embed],
                components: [row],
                flags: MessageFlags.Ephemeral
            });
        } else if (selected === "css") {
            const embed = new EmbedBuilder()
                .setTitle("CSS3")
                .setDescription("CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a apresentação de documentos HTML. Com o CSS, é possível controlar a aparência de páginas web, como cores, fontes, layouts e efeitos visuais.")
                .setColor('Orange');

            await interaction.reply({
                embeds: [embed],
                flags: MessageFlags.Ephemeral
            });
        } else if (selected === "html") {
            const embed = new EmbedBuilder()
                .setTitle("HTML5")
                .setDescription("HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar páginas web. O HTML define a estrutura e o conteúdo de uma página, como textos, imagens, links e outros elementos de mídia.")
                .setColor('Orange');

            await interaction.reply({
                embeds: [embed],
                flags: MessageFlags.Ephemeral
            });
        }
    }
};
