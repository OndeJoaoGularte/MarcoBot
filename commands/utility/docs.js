const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, MessageFlags } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Consulte a documentação das principais linguagens de desenvolvimento"),

    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("select-docs")
                .setPlaceholder("Nenhuma linguagem selecionada")
                .addOptions(
                    { label: "HTML5", description: "Veja a documentação de HTML5", value: "html" },
                    { label: "CSS3", description: "Veja a documentação de CSS3", value: "css" },
                    { label: "JavaScript", description: "Veja a documentação de JavaScript", value: "javascript" },
                    { label: "TypeScript", description: "Veja a documentação de TypeScript", value: "typescript" },
                    { label: "Python", description: "Veja a documentação de Python", value: "python" },
                    { label: "Java", description: "Veja a documentação de Java", value: "java" },
                    { label: "PHP", description: "Veja a documentação de PHP", value: "php" },
                    { label: "C#", description: "Veja a documentação de C#", value: "csharp" }
                )
        )

        await interaction.reply({
            content: "Selecione abaixo a linguagem para visualizar sua documentação:",
            components: [row],
            flags: MessageFlags.Ephemeral
        })
    },

    async handleSelect(interaction) {
        const selected = interaction.values[0]

        const data = {
            html: {
                title: "HTML5",
                url: "https://developer.mozilla.org/docs/Web/HTML",
                description: "Documentação oficial da linguagem HTML5 para construção de páginas web."
            },
            css: {
                title: "CSS3",
                url: "https://developer.mozilla.org/docs/Web/CSS",
                description: "Guia completo da linguagem CSS3 para estilização de páginas web."
            },
            javascript: {
                title: "JavaScript",
                url: "https://developer.mozilla.org/docs/Web/JavaScript",
                description: "Documentação oficial da linguagem JavaScript."
            },
            typescript: {
                title: "TypeScript",
                url: "https://www.typescriptlang.org/docs/",
                description: "Documentação oficial da linguagem TypeScript."
            },
            python: {
                title: "Python",
                url: "https://docs.python.org/3/",
                description: "Documentação oficial da linguagem Python."
            },
            java: {
                title: "Java",
                url: "https://docs.oracle.com/java/",
                description: "Documentação oficial da linguagem Java."
            },
            php: {
                title: "PHP",
                url: "https://www.php.net/docs.php",
                description: "Documentação oficial da linguagem PHP."
            },
            csharp: {
                title: "C#",
                url: "https://learn.microsoft.com/dotnet/csharp/",
                description: "Documentação oficial da linguagem C#."
            }
        };

        const { title, url, description, color } = data[selected]

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(`${description}\n\n[🔗 Acessar documentação](${url})`)
            .setColor('Orange')

        await interaction.reply({
            embeds: [embed],
            flags: MessageFlags.Ephemeral
        })
    }
}
